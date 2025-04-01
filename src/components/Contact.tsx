import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This would normally connect to a form submission API
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };
  
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-800 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-heading text-4xl font-extrabold mb-6 text-teal-200">
          Contact
        </h2>
        
        <p className="text-xl text-slate-light mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-8 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-slate-light">Name</label>
              <Input 
                id="name" 
                name="name" 
                required 
                className="bg-navy-light border-slate-dark focus:border-teal text-slate-light"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-slate-light">Email</label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="bg-navy-light border-slate-dark focus:border-teal text-slate-light"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-slate-light">Subject</label>
            <Input 
              id="subject" 
              name="subject" 
              required 
              className="bg-navy-light border-slate-dark focus:border-teal text-slate-light"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-slate-light">Message</label>
            <Textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              className="bg-navy-light border-slate-dark focus:border-teal text-slate-light resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-transparent hover:bg-teal/10 text-teal border border-teal rounded py-6"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
