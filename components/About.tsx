"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: Award,
    title: "2+ Years Experience",
    description: "In web development",
  },
  {
    icon: Briefcase,
    title: "50+ Projects",
    description: "Completed successfully",
  },
  {
    icon: GraduationCap,
    title: "Bachelor Degree",
    description: "Artificial Intelligence",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">
            Dedicated developer focused on crafting innovative, scalable, and high-performance solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Hello! I'm Muhammad Fahad Jabbar, a passionate Full Stack
              Developer with over 1 years of experience in creating robust and
              scalable web applications. My journey in the world of programming
              started when I was in college, and since then, I've been
              constantly learning and evolving with the ever-changing landscape
              of web technologies.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in Next.js ecosystems, with expertise in React for
              frontend development and Python,Fastapi,Crewai,Langchain,LangGraph for backend services. I'm
              also well-versed in database management, API design, and cloud
              deployment strategies.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <achievement.icon className="h-12 w-12 mb-4 text-primary" />
                      <h3 className="font-semibold text-xl mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
