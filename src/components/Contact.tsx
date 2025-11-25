import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// -------------------- ZOD SCHEMA --------------------

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof ContactSchema>;

// -----------------------------------------------------

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactForm) => {
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
       toast.success("Message sent! I'll get back to you soon.");
        form.reset();
      })
      .catch(() => {
       toast.error("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SECTION */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-6 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">govardhanreddy4628@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">9885438142</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Hyderabad, Telangana, India.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT SECTION - FORM */}
          <Card className="p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Subject"
                  {...form.register("subject")}
                />
                {form.formState.errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  rows={6}
                  placeholder="Your Message"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
