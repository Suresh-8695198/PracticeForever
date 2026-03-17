import xml.etree.ElementTree as ET
import os

def check_sitemap():
    sitemap_path = 'public/sitemap.xml'
    pages_dir = 'pages'
    
    if not os.path.exists(sitemap_path):
        print(f"Error: {sitemap_path} not found")
        return

    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    
    # Namespace handling
    ns = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    
    urls: list[str] = []
    for url in root.findall('ns:url', ns):
        loc_elem = url.find('ns:loc', ns)
        if loc_elem is not None and loc_elem.text:
            loc = str(loc_elem.text).strip()
            path = loc.replace('https://practiceforever.app', '')
            if not path or path == '/':
                path = '/index'
            urls.append(path)
    
    print(f"Checking {len(urls)} URLs from sitemap...")
    
    missing: list[str] = []
    for path in urls:
        if path == '/':
            continue
            
        # Clean path for file checking
        clean_path = path.strip('/')
        
        # Possible locations in Next.js
        locations = [
            os.path.join(pages_dir, clean_path + '.js'),
            os.path.join(pages_dir, clean_path + '/index.js'),
        ]
        
        # Check for dynamic segments like [category] or [id]
        found = False
        parts = clean_path.split('/')
        
        # Basic check for exact file existence
        if any(os.path.exists(loc) for loc in locations):
            found = True
            
        # Check dynamic folders (more robustly)
        if not found:
            current_sub_path = pages_dir
            for part in parts:
                if os.path.exists(current_sub_path):
                    for item in os.listdir(current_sub_path):
                        # Check for dynamic file like [category].js
                        if item.startswith('[') and item.endswith('].js'):
                            found = True
                            break
                        # Check for dynamic directory like [id]/
                        if item.startswith('[') and os.path.isdir(os.path.join(current_sub_path, item)):
                            found = True
                            break
                if found: break
                current_sub_path = os.path.join(current_sub_path, part)
                
        if not found:
            missing.append(path)
            
    if missing:
        print(f"\nFound {len(missing)} missing pages (Potential 404s):")
        for i, path in enumerate(missing):
            if i >= 20:
                print(f" ... and {len(missing) - 20} more.")
                break
            print(f" - {path}")
    else:
        print("\nAll sitemap URLs match existing files.")

if __name__ == "__main__":
    check_sitemap()
