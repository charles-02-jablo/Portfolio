import { useState, useEffect } from 'react';
import { LoaderCircle } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading process
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onLoadingComplete();
          return 100;
        }
        return prevProgress + 10;
      });
    }, 300);
    
    return () => clearInterval(interval);
  }, [onLoadingComplete]);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-navy z-50">
      <div className="relative">
        <LoaderCircle 
          className="text-blue-400 animate-spin" 
          size={60} 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-mono text-blue-300">{progress}%</span>
        </div>
      </div>
      <h1 className="mt-8 text-3xl font-bold text-slate-light animate-pulse">
        Loading...
      </h1>
      <div className="w-64 h-2 mt-6 bg-blue-900/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
