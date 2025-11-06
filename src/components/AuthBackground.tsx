import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Lightbulb, BookMarked, PenTool, FlaskConical, Calculator, Microscope } from 'lucide-react';

const AuthBackground = () => {
  const leftIcons = [
    { Icon: BookOpen, delay: 0 },
    { Icon: GraduationCap, delay: 0.5 },
    { Icon: Lightbulb, delay: 1 },
    { Icon: BookMarked, delay: 1.5 },
  ];

  const rightIcons = [
    { Icon: PenTool, delay: 0.2 },
    { Icon: FlaskConical, delay: 0.7 },
    { Icon: Calculator, delay: 1.2 },
    { Icon: Microscope, delay: 1.7 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Left side icons */}
      <div className="absolute left-4 md:left-12 top-1/4 space-y-12">
        {leftIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={`left-${index}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="text-primary/20"
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
        ))}
      </div>

      {/* Right side icons */}
      <div className="absolute right-4 md:right-12 top-1/4 space-y-12">
        {rightIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={`right-${index}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="text-secondary/20"
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-accent/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
};

export default AuthBackground;
