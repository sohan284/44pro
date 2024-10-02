const GlovesSVG = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    width="300"
    height="300"
  >
    {/* <!-- Main Glove Body --> */}
    <path
      d="M120 60 C90 80 50 130 60 200 C70 250 110 270 150 260 C180 250 230 240 240 190 C250 150 230 100 190 80 C170 70 140 60 120 60 Z"
      fill="#c68c53"
      stroke={color}
    />

    {/* <!-- Thumb --> */}
    <path
      d="M110 80 C80 70 70 100 80 130 C90 140 120 140 130 120 C130 100 120 90 110 80 Z"
      fill="#c68c53"
      stroke="#7a5230"
    />

    {/* <!-- Index Finger --> */}
    <path
      d="M130 60 C130 40 160 40 170 60 C170 80 160 100 140 100 C130 90 130 70 130 60 Z"
      fill="#c68c53"
      stroke="#7a5230"
    />

    {/* <!-- Middle Finger --> */}
    <path
      d="M150 65 C150 45 180 45 190 65 C190 85 180 110 160 105 C150 95 150 75 150 65 Z"
      fill="#c68c53"
      stroke="#ffffff"
    />

    {/* <!-- Ring Finger --> */}
    <path
      d="M180 70 C180 50 210 50 220 70 C220 90 210 110 190 100 C180 95 180 80 180 70 Z"
      fill="#c68c53"
      stroke="#7a5230"
    />

    {/* <!-- Pinky Finger --> */}
    <path
      d="M210 80 C210 60 230 60 240 80 C240 100 230 120 220 110 C210 100 210 90 210 80 Z"
      fill="#c68c53"
      stroke="#7a5230"
    />

    <path
      d="M120 80 C130 100 140 100 150 90 C160 80 150 70 140 70 C130 70 120 70 120 80 Z"
      fill="#c89b67"
      stroke="#7a5230"
    />

    {/* <!-- Stitching on Glove Body --> */}
    <path
      d="M140 180 C120 180 100 200 110 210 M160 190 C140 190 120 220 130 230 M180 200 C160 200 140 240 150 250 M200 210 C180 210 160 260 170 270"
      stroke="#7a5230"
    />

    {/* <!-- Webbing Details --> */}
    <path d="M135 85 L150 95 M145 75 L160 85" stroke="#7a5230" />

    {/* <!-- Glove Cuff --> */}
    <rect
      x="110"
      y="240"
      width="90"
      height="40"
      fill="#c68c53"
      stroke="#7a5230"
    />
  </svg>
);

export default GlovesSVG;
