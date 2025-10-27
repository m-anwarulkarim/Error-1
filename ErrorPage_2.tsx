import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-background text-foreground">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-8xl font-extrabold text-primary mb-4"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold mb-6"
      >
        পৃষ্ঠা পাওয়া যায়নি 😢
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-md text-muted-foreground mb-8"
      >
        আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো মুছে ফেলা হয়েছে অথবা ঠিকানাটি ভুল হতে
        পারে।
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Button asChild className="gap-2">
          <Link to="/">
            <ArrowLeft className="w-4 h-4" />
            হোমে ফিরে যান
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
