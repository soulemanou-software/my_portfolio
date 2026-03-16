const AfricanMaskBackground = ({ variant = 'default', opacity = 0.03 }) => {
  return (
    <>
      {/* African Spiritual Mask Pattern Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Main Spiritual Mask Pattern */}
            <pattern id="africanMaskBg" x="0" y="0" width="180" height="220" patternUnits="userSpaceOnUse">
              {/* Mask Face Silhouette */}
              <path 
                d="M90 15 Q115 30 120 65 Q125 100 118 140 Q110 175 90 195 Q70 175 62 140 Q55 100 60 65 Q65 30 90 15" 
                fill="none" 
                stroke="#D4A853" 
                strokeWidth="0.5" 
              />
              {/* Spiritual Eyes */}
              <ellipse cx="72" cy="80" rx="12" ry="6" fill="none" stroke="#E07A5F" strokeWidth="0.4" />
              <ellipse cx="108" cy="80" rx="12" ry="6" fill="none" stroke="#E07A5F" strokeWidth="0.4" />
              <circle cx="72" cy="80" r="3" fill="none" stroke="#D4A853" strokeWidth="0.25" />
              <circle cx="108" cy="80" r="3" fill="none" stroke="#D4A853" strokeWidth="0.25" />
              {/* Nose */}
              <path d="M90 85 L86 115 L90 120 L94 115 Z" fill="none" stroke="#5C4033" strokeWidth="0.3" />
              {/* Mouth */}
              <path d="M78 140 Q90 150 102 140" fill="none" stroke="#E07A5F" strokeWidth="0.4" />
              {/* Forehead Symbol */}
              <path d="M80 45 L90 32 L100 45" fill="none" stroke="#D4A853" strokeWidth="0.35" />
              <circle cx="90" cy="55" r="2.5" fill="none" stroke="#E07A5F" strokeWidth="0.25" />
              {/* Cheek Marks */}
              <path d="M50 88 L62 84" fill="none" stroke="#5C4033" strokeWidth="0.25" />
              <path d="M50 95 L62 91" fill="none" stroke="#5C4033" strokeWidth="0.25" />
              <path d="M130 88 L118 84" fill="none" stroke="#5C4033" strokeWidth="0.25" />
              <path d="M130 95 L118 91" fill="none" stroke="#5C4033" strokeWidth="0.25" />
              {/* Corner Adinkra-inspired symbols */}
              <circle cx="20" cy="20" r="8" fill="none" stroke="#D4A853" strokeWidth="0.2" />
              <path d="M16 20 L24 20 M20 16 L20 24" stroke="#D4A853" strokeWidth="0.2" />
              <circle cx="160" cy="200" r="8" fill="none" stroke="#E07A5F" strokeWidth="0.2" />
              <path d="M156 200 L164 200 M160 196 L160 204" stroke="#E07A5F" strokeWidth="0.2" />
            </pattern>

            {/* Subtle Kente Border Pattern */}
            <pattern id="kenteBorder" x="0" y="0" width="32" height="6" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="8" height="6" fill="#D4A853" opacity="0.15" />
              <rect x="8" y="0" width="8" height="6" fill="#E07A5F" opacity="0.15" />
              <rect x="16" y="0" width="8" height="6" fill="#5C4033" opacity="0.15" />
              <rect x="24" y="0" width="8" height="6" fill="#8B4513" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#africanMaskBg)" />
        </svg>
      </div>

      {/* Subtle ambient glows */}
      {variant === 'default' && (
        <>
          <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-savanna-400/[0.02] rounded-full blur-[150px] pointer-events-none" />
          <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-sunset-400/[0.02] rounded-full blur-[120px] pointer-events-none" />
        </>
      )}
    </>
  );
};

export default AfricanMaskBackground;
