import React, { useState } from 'react';
import useSWR from 'swr';
import PostsList from '../components/PostsList';
import ToggleButton from '../components/ToggleButton';

const LOCAL_POSTS_API = '/api/posts';

/**
 * Fetcher function for SWR
 * @param {string} url
 */
const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
});

export default function PostsPage() {
  const [showPosts, setShowPosts] = useState(true);
  const { data: posts, error, isLoading } = useSWR(LOCAL_POSTS_API, fetcher);

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 tracking-tight">Top 5 Posts</h1>
      <ToggleButton
        onToggle={(option) => setShowPosts(option === 'Show')}
        initial={showPosts ? 'Show' : 'Hide'}
      />
      {isLoading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error.message}</p>}
      {showPosts && !isLoading && !error && (
        <PostsList posts={posts?.slice(0, 5) || []} />
      )}
    </div>
  );
} 