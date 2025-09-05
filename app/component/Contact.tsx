"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "igwep5537@gmail.com",
    href: "mailto:alex@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 7065155757",
    href: "tel:+2347065155757",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Let&apos;s Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[#94A3B8] hover:text-purple-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#94A3B8]">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg border-[#1E293B]/50 hover:border-[#1E293B]"
            >
              <h4 className="font-semibold mb-2">Quick Response</h4>
              <p className="text-sm text-[#94A3B8]">
                I typically respond to emails within 24 hours. For urgent
                matters, feel free to call or send a message via Whatsapp.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="border-[#1E293B]/50 hover:border-[#1E293B]">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your name"
                        className={
                          errors.name
                            ? "border-destructive"
                            : "border-[#1E293B]/50 hover:border-[#1E293B]"
                        }
                      />
                      {errors.name && (
                        <p className="text-sm text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your.email@example.com"
                        className={
                          errors.email
                            ? "border-destructive"
                            : "border-[#1E293B]/50 hover:border-[#1E293B]"
                        }
                      />
                      {errors.email && (
                        <p className="text-sm text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="What's this about?"
                      className={
                        errors.subject
                          ? "border-destructive"
                          : "border-[#1E293B]/50 hover:border-[#1E293B]"
                      }
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-400">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell me about your project or just say hello!"
                      className={`min-h-[120px] ${
                        errors.message
                          ? "border-destructive"
                          : "border-[#1E293B]/50 hover:border-[#1E293B]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
