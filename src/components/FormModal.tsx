'use client'

import React from 'react'
import { useFormModal } from '@/context/FormModalContext'
import { X, Send, CheckCircle2, AlertCircle, ChevronDown, User, Phone, Mail, MapPin, GraduationCap, Briefcase, BookOpen, Atom } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

export const FormModal: React.FC = () => {
  const { isOpen, closeModal, formData, updateFormData, resetForm } = useFormModal()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setSubmitStatus('success')
      setTimeout(() => handleClose(), 2000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    closeModal()
    setTimeout(() => {
      resetForm()
      setSubmitStatus('idle')
    }, 300)
  }

  // --- Animation Variants FIXED ---
  const floatVariants: Variants = {
    float: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden border border-slate-100"
          >
            {/* Header Icons - Using fixed variants */}
            <motion.div 
              variants={floatVariants} 
              animate="float" 
              className="absolute top-8 left-8 text-white/10 pointer-events-none"
            >
              <BookOpen size={48} />
            </motion.div>
            <motion.div 
              variants={floatVariants} 
              animate="float" 
              className="absolute bottom-6 right-1/4 text-white/10 pointer-events-none" 
              style={{ transitionDelay: '1s' }}
            >
              <Atom size={40} />
            </motion.div>

            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#EF7D31] to-[#d66a25] text-white z-10">
              <div className="flex justify-between items-center relative z-20">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Let's Connect</h2>
                  <p className="text-orange-50 text-sm opacity-90 font-medium max-w-sm">
                    Fill in your details and we'll reach out shortly.
                  </p>
                </div>
                <button onClick={handleClose} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/10">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative p-6 sm:p-8 bg-[#fafbfc] overflow-hidden">
                {/* Body Icons - Using fixed variants */}
                <motion.div 
                  variants={floatVariants} 
                  animate="float" 
                  className="absolute top-20 right-10 text-slate-100 pointer-events-none"
                >
                  <Briefcase size={60} strokeWidth={1}/>
                </motion.div>
                <motion.div 
                  variants={floatVariants} 
                  animate="float" 
                  className="absolute bottom-10 left-10 text-slate-100 pointer-events-none" 
                  style={{ transitionDelay: '0.5s' }}
                >
                  <GraduationCap size={70} strokeWidth={1}/>
                </motion.div>

                <form onSubmit={handleSubmit} className="relative space-y-5 z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      label="Full Name"
                      id="name"
                      icon={<User size={16} />}
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(v) => updateFormData({ name: v })}
                    />
                    <FormField
                      label="Phone Number"
                      id="phone"
                      icon={<Phone size={16} />}
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(v) => updateFormData({ phone: v })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      label="Email Address"
                      id="email"
                      icon={<Mail size={16} />}
                      type="email"
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={(v) => updateFormData({ email: v })}
                    />
                    <FormField
                      label="Your City"
                      id="city"
                      icon={<MapPin size={16} />}
                      type="text"
                      placeholder="e.g. New Delhi"
                      value={formData.city}
                      onChange={(v) => updateFormData({ city: v })}
                    />
                  </div>

                  <FormField
                    label="What are you interested in?"
                    id="interest"
                    icon={<GraduationCap size={16} />}
                    type="select"
                    value={formData.interest || ""}
                    onChange={(v) => updateFormData({ interest: v })}
                    options={[
                      { label: "Select an option", value: "" },
                      { label: "Study Abroad", value: "study-abroad" },
                      { label: "MBBS Abroad", value: "mbbs-abroad" },
                      { label: "Online MBA", value: "online-mba" },
                      { label: "Regular MBA", value: "regular-mba" },
                      { label: "General Inquiry", value: "general" },
                    ]}
                  />

                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 bg-green-50 text-green-700 border border-green-100 rounded-2xl text-sm font-semibold">
                        <div className="p-1 bg-green-500 rounded-full text-white"><CheckCircle2 size={14} /></div>
                        Sent successfully!
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 bg-red-50 text-red-700 border border-red-100 rounded-2xl text-sm font-semibold">
                        <div className="p-1 bg-red-500 rounded-full text-white"><AlertCircle size={14} /></div>
                        Failed to send.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <button type="button" onClick={handleClose} className="w-full sm:w-1/3 px-6 py-4 text-slate-500 font-bold hover:text-slate-700 hover:bg-slate-100 rounded-2xl transition-all text-sm">
                      Close
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === 'success'}
                      className="w-full sm:w-2/3 relative flex items-center justify-center gap-2 px-6 py-4 bg-[#EF7D31] text-white font-bold rounded-2xl shadow-xl shadow-orange-200 hover:bg-[#d66a25] transition-all disabled:opacity-50 text-sm overflow-hidden"
                    >
                      {isSubmitting ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Submit Request <Send size={16} /></>}
                    </button>
                  </div>
                </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

// FormField implementation remains the same
interface FormFieldProps {
  label: string;
  id: string;
  icon: React.ReactNode;
  type: 'text' | 'email' | 'tel' | 'select';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options?: { label: string; value: string }[];
}

const FormField: React.FC<FormFieldProps> = ({ label, id, icon, type, placeholder, value, onChange, options }) => (
  <div className="space-y-2 flex-1 group">
    <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1 block">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#EF7D31] transition-colors pointer-events-none z-20">
        {icon}
      </div>
      
      {type === 'select' ? (
        <>
          <select
            id={id}
            required
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full pl-11 pr-10 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-orange-50 focus:border-[#EF7D31] outline-none transition-all text-slate-900 text-sm appearance-none cursor-pointer shadow-sm z-10 relative"
          >
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-[#EF7D31] z-20">
            <ChevronDown className="w-4 h-4" />
          </div>
        </>
      ) : (
        <input
          id={id}
          type={type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-orange-50 focus:border-[#EF7D31] outline-none transition-all text-slate-900 placeholder:text-slate-400 text-sm shadow-sm z-10 relative"
        />
      )}
    </div>
  </div>
)