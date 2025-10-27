/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white">
      {/* 🔵 Animated Background Blur Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl animate-ping" />

      {/* 🌫 Glass Effect Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl px-8 py-12 text-center max-w-md"
      >
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="text-9xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mb-4"
        >
          পৃষ্ঠা পাওয়া যায়নি 😢
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/80 mb-8 leading-relaxed"
        >
          আপনি যে লিংকে যেতে চেয়েছেন সেটি হয়তো বিদ্যমান নেই বা মুছে ফেলা হয়েছে।
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            asChild
            variant="secondary"
            className="gap-2 bg-white/10 text-white hover:bg-white/20"
          >
            <Link to="/">
              <Home className="w-4 h-4" />
              হোমে ফিরে যান
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="gap-2 bg-purple-600  text-white border-white/40 hover:bg-white/10"
          >
            <Link to={-1 as any}>
              <ArrowLeft className="w-4 h-4" />
              আগের পৃষ্ঠায় যান
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* ✨ Floating gradient text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 text-sm text-white/60 tracking-wide"
      >
        © {new Date().getFullYear()} — তোমার ওয়েবসাইট
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
