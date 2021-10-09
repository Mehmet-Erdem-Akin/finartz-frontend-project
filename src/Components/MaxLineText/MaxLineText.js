import React from 'react';
function MaxLineText(props) {
  const { classes, children, style, maxLine, ...rest } = props;
  return (
    <p
      {...rest}
      style={{
        ...props.style,
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: maxLine ? maxLine : '1',
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {children}
    </p>
  );
}
export default MaxLineText;