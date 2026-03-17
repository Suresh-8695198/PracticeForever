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
    
    urls = []
    for url in root.findall('ns:url', ns):
        loc = url.find('ns:loc', ns).text
        path = loc.replace('https://practiceforever.app', '')
        if path == '/':
            path = '/index'
        urls.append(path)
    
    print(f"Checking {len(urls)} URLs from sitemap...")
    
    missing = []
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
            
        # Check dynamic folders (very basic)
        if not found:
            for i in range(len(parts)):
                sub_path = os.path.join(pages_dir, *parts[:i])
                if os.path.exists(sub_path):
                    for item in os.listdir(sub_path):
                        if item.startswith('[') and item.endswith('].js'):
                            found = True
                            break
                        if item.startswith('[') and os.path.isdir(os.path.join(sub_path, item)):
                            found = True
                            break
                if found: break
                
        if not found:
            missing.append(path)
            
    if missing:
        print(f"\nFound {len(missing)} missing pages (Potential 404s):")
        for m in missing[:20]: # Show first 20
            print(f" - {m}")
        if len(missing) > 20: print(f" ... and {len(missing)-20} more.")
    else:
        print("\nAll sitemap URLs match existing files.")

if __name__ == "__main__":
    check_sitemap()
