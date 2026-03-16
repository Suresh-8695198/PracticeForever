import React, { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from '../../../../context/ThemeContext';

// HR Topic Data Imports
import { questions as tellMeQ } from '../../../../data/company/tcs/hr/tell-me-about-yourself';
import { questions as strengthsQ } from '../../../../data/company/tcs/hr/strengths-weaknesses';
import { questions as whyTcsQ } from '../../../../data/company/tcs/hr/why-tcs';
import { questions as situationsQ } from '../../../../data/company/tcs/hr/situation-based-scenarios';
import { questions as resumeQ } from '../../../../data/company/tcs/hr/resume-deep-dive';
import { questions as projectQ } from '../../../../data/company/tcs/hr/project-discussions';
import { questions as roleQ } from '../../../../data/company/tcs/hr/role-awareness';

const hrTopicDataMap = {
  'tell-me-about-yourself': tellMeQ,
  'strengths-weaknesses': strengthsQ,
  'why-tcs': whyTcsQ,
  'situation-based-scenarios': situationsQ,
  'resume-deep-dive': resumeQ,
  'project-discussions': projectQ,
  'role-awareness': roleQ,
};

const HR_TOPICS_LIST = [
  "Tell me about yourself",
  "Strengths & Weaknesses",
  "Why TCS?",
  "Situation Based Scenarios",
  "Resume Deep Dive",
  "Project Discussions",
  "Role Awareness"
];

export default function HRTopicPage() {
  const router = useRouter();
  const { company, topic } = router.query;
  const { isDark } = useTheme();

  const [currentPage, setCurrentPage] = useState(1);
  const [expandedAnswers, setExpandedAnswers] = useState({});
  const [showPostForm, setShowPostForm] = useState({});
  const [postText, setPostText] = useState({});
  const [localAnswers, setLocalAnswers] = useState({});
  const [likedAnswers, setLikedAnswers] = useState({});
  const [showShareForm, setShowShareForm] = useState(false);
  const [shareText, setShareText] = useState('');
  const [sharedExperiences, setSharedExperiences] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest');

  const questionsPerPage = 5;

  // Load saved data from localStorage
  useEffect(() => {
    if (topic) {
      const savedAnswers = localStorage.getItem(`hr_answers_${company}_${topic}`);
      const savedLikes = localStorage.getItem(`hr_likes_${company}_${topic}`);
      const savedExperiences = localStorage.getItem(`hr_experiences_${company}_${topic}`);
      if (savedAnswers) setLocalAnswers(JSON.parse(savedAnswers));
      if (savedLikes) setLikedAnswers(JSON.parse(savedLikes));
      if (savedExperiences) setSharedExperiences(JSON.parse(savedExperiences));
    }
  }, [topic, company]);

  const topicSlug = topic?.toLowerCase() || '';
  const questions = hrTopicDataMap[topicSlug] || [];
  const topicName = topic ? topic.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Topic';
  const companyName = company ? company.toUpperCase() : 'Company';

  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = useMemo(() => {
    const start = (currentPage - 1) * questionsPerPage;
    return questions.slice(start, start + questionsPerPage);
  }, [questions, currentPage]);

  const toggleAnswers = (qId) => {
    setExpandedAnswers(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const togglePostForm = (qId) => {
    setShowPostForm(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handlePostAnswer = (qId) => {
    const text = postText[qId]?.trim();
    if (!text) return;

    const newAnswer = {
      id: `local-${Date.now()}`,
      author: "You",
      timeAgo: "Just now",
      text: text,
      likes: 0,
      replies: 0,
      isLocal: true
    };

    setLocalAnswers(prev => {
      const updated = { ...prev, [qId]: [...(prev[qId] || []), newAnswer] };
      localStorage.setItem(`hr_answers_${company}_${topic}`, JSON.stringify(updated));
      return updated;
    });

    setPostText(prev => ({ ...prev, [qId]: '' }));
    setShowPostForm(prev => ({ ...prev, [qId]: false }));
    setExpandedAnswers(prev => ({ ...prev, [qId]: true }));
  };

  const handleLike = (answerId) => {
    setLikedAnswers(prev => {
      const updated = { ...prev, [answerId]: !prev[answerId] };
      localStorage.setItem(`hr_likes_${company}_${topic}`, JSON.stringify(updated));
      return updated;
    });
  };

  const handleShareExperience = () => {
    const text = shareText.trim();
    if (!text) return;

    const exp = {
      id: `exp-${Date.now()}`,
      author: "You",
      timeAgo: "Just now",
      text: text,
      likes: 0
    };

    setSharedExperiences(prev => {
      const updated = [exp, ...prev];
      localStorage.setItem(`hr_experiences_${company}_${topic}`, JSON.stringify(updated));
      return updated;
    });

    setShareText('');
    setShowShareForm(false);
  };

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!router.isReady) return null;

  const companyBackUrl = `/interviews/company/${company}${router.query.tab !== undefined ? `?tab=${router.query.tab}` : ''}`;

  // Get adjacent topics for navigation
  const currentTopicIndex = HR_TOPICS_LIST.findIndex(t =>
    t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '').replace(/^-+/, '') === topicSlug
  );
  const prevTopicName = currentTopicIndex > 0 ? HR_TOPICS_LIST[currentTopicIndex - 1] : null;
  const nextTopicName = currentTopicIndex < HR_TOPICS_LIST.length - 1 ? HR_TOPICS_LIST[currentTopicIndex + 1] : null;
  const toSlug = (name) => name?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '').replace(/^-+/, '');

  const font = { fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' };

  return (
    <div
      className="min-h-screen pt-24 pb-16"
      style={{
        ...font,
        backgroundColor: isDark ? '#111' : '#f5f5f5',
        color: isDark ? '#e0e0e0' : '#333'
      }}
    >
      <Head>
        <title>{topicName} — HR Interview Prep | {companyName}</title>
        <meta name="description" content={`Prepare for "${topicName}" HR interview question with tips, sample answers, and community discussions.`} />
      </Head>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/interviews/company" style={{ color: isDark ? '#8ab4f8' : '#1a73e8', textDecoration: 'none' }}>Companies</Link>
          <span style={{ color: '#999' }}>/</span>
          <Link href={companyBackUrl} style={{ color: isDark ? '#8ab4f8' : '#1a73e8', textDecoration: 'none' }}>{companyName}</Link>
          <span style={{ color: '#999' }}>/</span>
          <span style={{ color: isDark ? '#bbb' : '#555' }}>HR Interview</span>
          <span style={{ color: '#999' }}>/</span>
          <span style={{ fontWeight: 600, color: isDark ? '#fff' : '#222' }}>{topicName}</span>
        </nav>

        {/* Main Layout: Content + Sidebar */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Main Content */}
          <div style={{ flex: '1 1 680px', minWidth: 0 }}>

            {/* Topic Header */}
            <div style={{
              backgroundColor: isDark ? '#1a1a1a' : '#fff',
              border: `1px solid ${isDark ? '#2a2a2a' : '#ddd'}`,
              borderRadius: 4,
              padding: '20px 24px',
              marginBottom: 16
            }}>
              <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 6px 0', color: isDark ? '#fff' : '#222' }}>
                {topicName}
              </h1>
              <div style={{ fontSize: 13, color: isDark ? '#888' : '#666' }}>
                {questions.length} questions available &nbsp;•&nbsp; Page {currentPage} of {totalPages || 1}
                &nbsp;•&nbsp;
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  Sort:
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    style={{
                      border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                      borderRadius: 3,
                      padding: '2px 6px',
                      fontSize: 12,
                      backgroundColor: isDark ? '#222' : '#fff',
                      color: isDark ? '#ccc' : '#333',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="newest">Newest</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </span>
              </div>
            </div>

            {/* Questions List */}
            {currentQuestions.map((q, qIdx) => {
              const globalIdx = (currentPage - 1) * questionsPerPage + qIdx + 1;
              const allAnswers = [
                ...(q.answers || []),
                ...(localAnswers[q.id] || [])
              ];
              const isExpanded = expandedAnswers[q.id];
              const isPostOpen = showPostForm[q.id];

              return (
                <div
                  key={q.id}
                  style={{
                    backgroundColor: isDark ? '#1a1a1a' : '#fff',
                    border: `1px solid ${isDark ? '#2a2a2a' : '#ddd'}`,
                    borderRadius: 4,
                    marginBottom: 16,
                    overflow: 'hidden'
                  }}
                >
                  {/* Question Header */}
                  <div style={{
                    backgroundColor: isDark ? '#1e2a1e' : '#f0f7f0',
                    borderBottom: `1px solid ${isDark ? '#2a3a2a' : '#d4e8d4'}`,
                    padding: '14px 20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12
                  }}>
                    <div style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      backgroundColor: isDark ? '#2d5a2d' : '#4caf50',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      fontWeight: 700
                    }}>
                      {globalIdx}
                    </div>
                    <h2 style={{ fontSize: 16, fontWeight: 600, margin: 0, lineHeight: 1.5, color: isDark ? '#fff' : '#222' }}>
                      {q.question}
                    </h2>
                  </div>

                  {/* Tips / Points to Remember */}
                  {q.tips && q.tips.length > 0 && (
                    <div style={{
                      padding: '14px 20px',
                      borderBottom: `1px solid ${isDark ? '#2a2a2a' : '#eee'}`,
                      backgroundColor: isDark ? '#1a1f2a' : '#f8f9ff'
                    }}>
                      <div style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: isDark ? '#7aabf5' : '#1565c0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: 8
                      }}>
                        Points to remember before you answer:
                      </div>
                      <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.8, color: isDark ? '#ccc' : '#444' }}>
                        {q.tips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Points */}
                  {q.keyPoints && q.keyPoints.length > 0 && (
                    <div style={{ padding: '14px 20px', borderBottom: `1px solid ${isDark ? '#2a2a2a' : '#eee'}` }}>
                      <div style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: isDark ? '#e8a838' : '#e65100',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: 8
                      }}>
                        Key Points to Cover:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {q.keyPoints.map((point, i) => (
                          <span
                            key={i}
                            style={{
                              display: 'inline-block',
                              padding: '4px 10px',
                              fontSize: 12,
                              borderRadius: 3,
                              backgroundColor: isDark ? '#2a2520' : '#fff3e0',
                              color: isDark ? '#e8a838' : '#e65100',
                              border: `1px solid ${isDark ? '#3a3020' : '#ffe0b2'}`,
                              fontWeight: 500
                            }}
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sample Answer */}
                  {q.sampleAnswer && (
                    <div style={{ padding: '14px 20px', borderBottom: `1px solid ${isDark ? '#2a2a2a' : '#eee'}` }}>
                      <div style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: isDark ? '#81c784' : '#2e7d32',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: 8
                      }}>
                        Sample Answer:
                      </div>
                      <div style={{
                        fontSize: 14,
                        lineHeight: 1.8,
                        color: isDark ? '#d0d0d0' : '#333',
                        whiteSpace: 'pre-line',
                        padding: '12px 16px',
                        backgroundColor: isDark ? '#151f15' : '#f1f8e9',
                        borderLeft: `3px solid ${isDark ? '#4caf50' : '#66bb6a'}`,
                        borderRadius: '0 4px 4px 0'
                      }}>
                        {q.sampleAnswer}
                      </div>
                    </div>
                  )}

                  {/* Action Bar */}
                  <div style={{
                    padding: '10px 20px',
                    borderBottom: `1px solid ${isDark ? '#2a2a2a' : '#eee'}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    flexWrap: 'wrap',
                    fontSize: 13
                  }}>
                    <button
                      onClick={() => togglePostForm(q.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isDark ? '#f48fb1' : '#c2185b',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: 13,
                        padding: '4px 0',
                        fontFamily: 'inherit'
                      }}
                    >
                      ✎ Post your answer now
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button
                      onClick={() => toggleAnswers(q.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isDark ? '#8ab4f8' : '#1a73e8',
                        cursor: 'pointer',
                        fontWeight: 500,
                        fontSize: 13,
                        padding: '4px 0',
                        fontFamily: 'inherit'
                      }}
                    >
                      {isExpanded ? '▾ Hide Answers' : `▸ View Answers (${allAnswers.length})`}
                    </button>
                  </div>

                  {/* Post Answer Form */}
                  {isPostOpen && (
                    <div style={{
                      padding: '16px 20px',
                      borderBottom: `1px solid ${isDark ? '#2a2a2a' : '#eee'}`,
                      backgroundColor: isDark ? '#151515' : '#fafafa'
                    }}>
                      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, color: isDark ? '#aaa' : '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Write your answer:
                      </div>
                      <textarea
                        value={postText[q.id] || ''}
                        onChange={(e) => setPostText(prev => ({ ...prev, [q.id]: e.target.value }))}
                        placeholder="Type your answer here... Share how you would respond to this question in an actual interview."
                        rows={5}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          fontSize: 14,
                          lineHeight: 1.6,
                          border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                          borderRadius: 4,
                          backgroundColor: isDark ? '#1a1a1a' : '#fff',
                          color: isDark ? '#e0e0e0' : '#333',
                          resize: 'vertical',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box'
                        }}
                      />
                      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                        <button
                          onClick={() => handlePostAnswer(q.id)}
                          style={{
                            padding: '8px 20px',
                            fontSize: 13,
                            fontWeight: 600,
                            backgroundColor: isDark ? '#2e7d32' : '#4caf50',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer',
                            fontFamily: 'inherit'
                          }}
                        >
                          Submit Answer
                        </button>
                        <button
                          onClick={() => togglePostForm(q.id)}
                          style={{
                            padding: '8px 16px',
                            fontSize: 13,
                            backgroundColor: 'transparent',
                            color: isDark ? '#aaa' : '#666',
                            border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                            borderRadius: 4,
                            cursor: 'pointer',
                            fontFamily: 'inherit'
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Answers Section */}
                  {isExpanded && (
                    <div style={{ borderTop: isPostOpen ? 'none' : undefined }}>
                      <div style={{
                        padding: '10px 20px',
                        backgroundColor: isDark ? '#151515' : '#f9f9f9',
                        borderBottom: `1px solid ${isDark ? '#2a2a2a' : '#eee'}`,
                        fontSize: 13,
                        fontWeight: 700,
                        color: isDark ? '#aaa' : '#555'
                      }}>
                        {allAnswers.length} {allAnswers.length === 1 ? 'Answer' : 'Answers'}
                      </div>

                      {allAnswers.map((ans, aIdx) => (
                        <div
                          key={ans.id}
                          style={{
                            padding: '16px 20px',
                            borderBottom: aIdx < allAnswers.length - 1 ? `1px solid ${isDark ? '#2a2a2a' : '#f0f0f0'}` : 'none'
                          }}
                        >
                          {/* Answer Header */}
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{
                                width: 30,
                                height: 30,
                                borderRadius: '50%',
                                backgroundColor: ans.isLocal
                                  ? (isDark ? '#2d5a2d' : '#c8e6c9')
                                  : (isDark ? '#333' : '#e0e0e0'),
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 13,
                                fontWeight: 700,
                                color: ans.isLocal
                                  ? (isDark ? '#81c784' : '#2e7d32')
                                  : (isDark ? '#aaa' : '#666')
                              }}>
                                {ans.author.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <span style={{
                                  fontWeight: 600,
                                  fontSize: 14,
                                  color: isDark ? '#4fc3f7' : '#0d47a1'
                                }}>
                                  {ans.author}
                                </span>
                                <span style={{ fontSize: 12, color: '#999', marginLeft: 8 }}>
                                  {ans.isLocal ? 'Your answer' : `said: ${ans.timeAgo}`}
                                </span>
                              </div>
                            </div>
                            <span style={{ fontSize: 12, color: '#999' }}>{ans.timeAgo}</span>
                          </div>

                          {/* Answer Content */}
                          <div style={{
                            fontSize: 14,
                            lineHeight: 1.8,
                            color: isDark ? '#d0d0d0' : '#333',
                            whiteSpace: 'pre-line',
                            paddingLeft: 38
                          }}>
                            {ans.text}
                          </div>

                          {/* Answer Actions */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                            marginTop: 10,
                            paddingLeft: 38,
                            fontSize: 12,
                            color: '#999'
                          }}>
                            <button
                              onClick={() => handleLike(ans.id)}
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: 12,
                                fontFamily: 'inherit',
                                color: likedAnswers[ans.id] ? '#e91e63' : '#999',
                                fontWeight: likedAnswers[ans.id] ? 600 : 400,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 4,
                                padding: '2px 0'
                              }}
                            >
                              {likedAnswers[ans.id] ? '♥' : '♡'} {(ans.likes || 0) + (likedAnswers[ans.id] ? 1 : 0)}
                            </button>
                            <span>💬 {ans.replies || 0} replies</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{
                backgroundColor: isDark ? '#1a1a1a' : '#fff',
                border: `1px solid ${isDark ? '#2a2a2a' : '#ddd'}`,
                borderRadius: 4,
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                flexWrap: 'wrap',
                marginBottom: 16
              }}>
                <button
                  onClick={() => changePage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  style={{
                    padding: '6px 14px',
                    fontSize: 13,
                    border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                    borderRadius: 3,
                    backgroundColor: isDark ? '#222' : '#fff',
                    color: currentPage === 1 ? '#999' : (isDark ? '#ccc' : '#333'),
                    cursor: currentPage === 1 ? 'default' : 'pointer',
                    fontFamily: 'inherit'
                  }}
                >
                  « Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => changePage(page)}
                    style={{
                      padding: '6px 12px',
                      fontSize: 13,
                      border: `1px solid ${currentPage === page ? (isDark ? '#4caf50' : '#4caf50') : (isDark ? '#444' : '#ccc')}`,
                      borderRadius: 3,
                      backgroundColor: currentPage === page ? (isDark ? '#2e7d32' : '#4caf50') : (isDark ? '#222' : '#fff'),
                      color: currentPage === page ? '#fff' : (isDark ? '#ccc' : '#333'),
                      cursor: 'pointer',
                      fontWeight: currentPage === page ? 700 : 400,
                      fontFamily: 'inherit'
                    }}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => changePage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  style={{
                    padding: '6px 14px',
                    fontSize: 13,
                    border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                    borderRadius: 3,
                    backgroundColor: isDark ? '#222' : '#fff',
                    color: currentPage === totalPages ? '#999' : (isDark ? '#ccc' : '#333'),
                    cursor: currentPage === totalPages ? 'default' : 'pointer',
                    fontFamily: 'inherit'
                  }}
                >
                  Next »
                </button>
              </div>
            )}

            {/* Share Your Experience Section */}
            <div style={{
              backgroundColor: isDark ? '#1a1a1a' : '#fff',
              border: `1px solid ${isDark ? '#2a2a2a' : '#ddd'}`,
              borderRadius: 4,
              marginBottom: 16,
              overflow: 'hidden'
            }}>
              <div style={{
                padding: '14px 20px',
                backgroundColor: isDark ? '#1a1f2a' : '#e3f2fd',
                borderBottom: `1px solid ${isDark ? '#2a3040' : '#bbdefb'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: isDark ? '#fff' : '#1565c0', marginBottom: 2 }}>
                    Share Your Interview Experience
                  </div>
                  <div style={{ fontSize: 12, color: isDark ? '#888' : '#5c7a9a' }}>
                    Help other candidates by sharing your real interview experience for this topic
                  </div>
                </div>
                <button
                  onClick={() => setShowShareForm(!showShareForm)}
                  style={{
                    padding: '8px 16px',
                    fontSize: 13,
                    fontWeight: 600,
                    backgroundColor: isDark ? '#1565c0' : '#1976d2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {showShareForm ? 'Cancel' : '+ Share Experience'}
                </button>
              </div>

              {showShareForm && (
                <div style={{ padding: '16px 20px', borderBottom: `1px solid ${isDark ? '#2a2a2a' : '#eee'}` }}>
                  <textarea
                    value={shareText}
                    onChange={(e) => setShareText(e.target.value)}
                    placeholder="Share your interview experience...&#10;&#10;Example: 'In my TCS HR interview, the interviewer asked me about [topic]. Here's what I said and the feedback I received...'"
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      fontSize: 14,
                      lineHeight: 1.6,
                      border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                      borderRadius: 4,
                      backgroundColor: isDark ? '#1a1a1a' : '#fff',
                      color: isDark ? '#e0e0e0' : '#333',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                  />
                  <button
                    onClick={handleShareExperience}
                    style={{
                      marginTop: 10,
                      padding: '8px 20px',
                      fontSize: 13,
                      fontWeight: 600,
                      backgroundColor: isDark ? '#1565c0' : '#1976d2',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 4,
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                  >
                    Submit Experience
                  </button>
                </div>
              )}

              {/* Shared Experiences List */}
              {sharedExperiences.length > 0 && (
                <div>
                  {sharedExperiences.map((exp, i) => (
                    <div
                      key={exp.id}
                      style={{
                        padding: '14px 20px',
                        borderBottom: i < sharedExperiences.length - 1 ? `1px solid ${isDark ? '#2a2a2a' : '#f0f0f0'}` : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <div style={{
                          width: 26,
                          height: 26,
                          borderRadius: '50%',
                          backgroundColor: isDark ? '#1565c0' : '#bbdefb',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 12,
                          fontWeight: 700,
                          color: isDark ? '#90caf9' : '#1565c0'
                        }}>
                          {exp.author.charAt(0)}
                        </div>
                        <span style={{ fontWeight: 600, fontSize: 13, color: isDark ? '#90caf9' : '#1565c0' }}>{exp.author}</span>
                        <span style={{ fontSize: 11, color: '#999' }}>{exp.timeAgo}</span>
                      </div>
                      <div style={{ fontSize: 14, lineHeight: 1.7, color: isDark ? '#ccc' : '#444', whiteSpace: 'pre-line', paddingLeft: 34 }}>
                        {exp.text}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Topic Navigation */}
            <div style={{
              display: 'flex',
              gap: 12,
              marginBottom: 24,
              flexWrap: 'wrap'
            }}>
              {prevTopicName && (
                <Link
                  href={`/interviews/company/${company}/${toSlug(prevTopicName)}?tab=${router.query.tab || 3}`}
                  style={{
                    flex: 1,
                    padding: '14px 16px',
                    backgroundColor: isDark ? '#1a1a1a' : '#fff',
                    border: `1px solid ${isDark ? '#2a2a2a' : '#ddd'}`,
                    borderRadius: 4,
                    textDecoration: 'none',
                    textAlign: 'left',
                    minWidth: 200
                  }}
                >
                  <div style={{ fontSize: 11, color: '#999', marginBottom: 4 }}>← Previous Topic</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#8ab4f8' : '#1a73e8' }}>{prevTopicName}</div>
                </Link>
              )}
              {nextTopicName && (
                <Link
                  href={`/interviews/company/${company}/${toSlug(nextTopicName)}?tab=${router.query.tab || 3}`}
                  style={{
                    flex: 1,
                    padding: '14px 16px',
                    backgroundColor: isDark ? '#1a1a1a' : '#fff',
                    border: `1px solid ${isDark ? '#2a2a2a' : '#ddd'}`,
                    borderRadius: 4,
                    textDecoration: 'none',
                    textAlign: 'right',
                    minWidth: 200
                  }}
                >
                  <div style={{ fontSize: 11, color: '#999', marginBottom: 4 }}>Next Topic →</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#8ab4f8' : '#1a73e8' }}>{nextTopicName}</div>
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ flex: '0 0 280px', position: 'sticky', top: 100 }}>

            {/* Quick Links */}
            <div style={{
              backgroundColor: isDark ? '#1a1a1a' : '#fff',
              border: `1px solid ${isDark ? '#2a2a2a' : '#ddd'}`,
              borderRadius: 4,
              marginBottom: 16,
              overflow: 'hidden'
            }}>
              <div style={{
                padding: '10px 16px',
                backgroundColor: isDark ? '#222' : '#f5f5f5',
                borderBottom: `1px solid ${isDark ? '#2a2a2a' : '#ddd'}`,
                fontSize: 13,
                fontWeight: 700,
                color: isDark ? '#fff' : '#333'
              }}>
                HR Interview Topics
              </div>
              <div style={{ padding: '8px 0' }}>
                {HR_TOPICS_LIST.map((t) => {
                  const slug = toSlug(t);
                  const isActive = slug === topicSlug;
                  return (
                    <Link
                      key={slug}
                      href={`/interviews/company/${company}/${slug}?tab=${router.query.tab || 3}`}
                      style={{
                        display: 'block',
                        padding: '7px 16px',
                        fontSize: 13,
                        textDecoration: 'none',
                        color: isActive ? (isDark ? '#fff' : '#1a73e8') : (isDark ? '#bbb' : '#555'),
                        backgroundColor: isActive ? (isDark ? '#1a2a3a' : '#e8f0fe') : 'transparent',
                        borderLeft: isActive ? `3px solid ${isDark ? '#4285f4' : '#1a73e8'}` : '3px solid transparent',
                        fontWeight: isActive ? 600 : 400,
                        transition: 'all 0.15s'
                      }}
                    >
                      {isActive ? '▸ ' : ''}{t}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Interview Tips Card */}
            <div style={{
              backgroundColor: isDark ? '#1a1a1a' : '#fff',
              border: `1px solid ${isDark ? '#2a2a2a' : '#ddd'}`,
              borderRadius: 4,
              marginBottom: 16,
              overflow: 'hidden'
            }}>
              <div style={{
                padding: '10px 16px',
                backgroundColor: isDark ? '#2a1f1a' : '#fff8e1',
                borderBottom: `1px solid ${isDark ? '#3a2f1a' : '#ffe082'}`,
                fontSize: 13,
                fontWeight: 700,
                color: isDark ? '#ffd54f' : '#f57f17'
              }}>
                Quick Tips
              </div>
              <div style={{ padding: '12px 16px', fontSize: 13, lineHeight: 1.7, color: isDark ? '#bbb' : '#555' }}>
                <p style={{ margin: '0 0 8px' }}>• Be confident but humble</p>
                <p style={{ margin: '0 0 8px' }}>• Use STAR method for behavioral questions</p>
                <p style={{ margin: '0 0 8px' }}>• Research the company beforehand</p>
                <p style={{ margin: '0 0 8px' }}>• Prepare 2-3 questions to ask the HR</p>
                <p style={{ margin: '0 0 8px' }}>• Dress professionally</p>
                <p style={{ margin: 0 }}>• Maintain eye contact</p>
              </div>
            </div>

            {/* Back Link */}
            <Link
              href={companyBackUrl}
              style={{
                display: 'block',
                padding: '12px 16px',
                backgroundColor: isDark ? '#1a1a1a' : '#fff',
                border: `1px solid ${isDark ? '#2a2a2a' : '#ddd'}`,
                borderRadius: 4,
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 600,
                color: isDark ? '#8ab4f8' : '#1a73e8',
                textAlign: 'center'
              }}
            >
              ← Back to {companyName} Interview Prep
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
