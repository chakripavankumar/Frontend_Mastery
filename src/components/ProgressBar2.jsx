import React, { useState } from 'react';

function ProgressBartwo() {
    // State to track progress percentage (0-100)
    const [progress, setProgress] = useState(0);

    // Function to safely update progress (stays within 0-100 range)
    const updateProgress = (delta) => {
        setProgress(prev => Math.max(0, Math.min(100, prev + delta)));
    }

    // Function to determine bar color based on progress
    const getBarColor = () => {
        if (progress >= 80) return "bg-green-500";  // High progress
        if (progress >= 40) return "bg-orange-500"; // Medium progress
        return "bg-red-500";                       // Low progress
    }

    return (
        <div className="max-w-md mx-auto p-5">
            <h2 className="text-xl font-bold mb-4 text-center">Progress Bar</h2>

            {/* Outer progress bar container */}
            <div className="h-6 bg-gray-200 rounded-full overflow-hidden relative">

                {/* Animated progress bar */}
                <div
                    className={`h-full ${getBarColor()} transition-all duration-300 ease-in-out`}
                    style={{ width: `${progress}%` }}
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {/* Progress percentage text (centered) */}
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-bold">
                        {progress}%
                    </span>
                </div>
            </div>

            {/* Control buttons */}
            <div className="mt-3 flex justify-center gap-3">
                <button
                    onClick={() => updateProgress(-10)}
                    className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                    -10%
                </button>
                <button
                    onClick={() => updateProgress(+10)}
                    className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                    +10%
                </button>
            </div>
        </div>
    );
}

export default ProgressBartwo;