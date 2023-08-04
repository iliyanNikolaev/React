import React from 'react'

export default function CommentItem({
    comment
}) {
  return (
    <li><strong>{comment.username}:</strong> {comment.content}</li>
  )
}
