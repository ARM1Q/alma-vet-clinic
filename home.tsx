
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Stethoscope,
  Clock,
  ShieldCheck,
  ChevronLeft,
  Star,
  Phone,
  Award,
  Users,
} from "lucide-react";

const FEATURES = [
  {
    icon: Stethoscope,
    title: "كادر طبي متخصص",
    desc: "أطباء بيطريون ذوو خبرة عالية في التعامل مع كافة أنواع الحيوانات الأليفة.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "رعاية شاملة ومتكاملة",
    desc: "من الفحوصات الدورية والتطعيمات إلى العمليات الجراحية المتخصصة.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Clock,
    title: "استجابة سريعة",
    desc: "فريقنا متاح لخدمتكم كل يوم من ٩ صباحاً حتى ١٠ مساءً.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
];

const STATS = [
  { value: "+٥٠٠٠", label: "حيوان تم علاجه", icon: HeartPulse },
  { value: "+١٢", label: "طبيب بيطري", icon: Users },
  { value: "١٠+", label: "سنوات خبرة", icon: Award },
  { value: "٤.٩★", label: "تقييم العملاء", icon: Star },
];

export default function Home() {
  return (
    <div style={{fontFamily:"sans-serif",padding:"40px"}}>
      <h1>عيادة ألما البيطرية</h1>
      <p>نسخة تجريبية من الموقع — الواجهة الرئيسية.</p>

      <h2>إحصائيات</h2>
      <ul>
        {STATS.map((s,i)=>(
          <li key={i}>{s.value} — {s.label}</li>
        ))}
      </ul>

      <h2>لماذا تختارنا؟</h2>
      <ul>
        {FEATURES.map((f,i)=>(
          <li key={i}>
            <b>{f.title}</b> — {f.desc}
          </li>
        ))}
      </ul>

      <p style={{marginTop:40}}>
        هذا المشروع جاهز للنشر على Vercel.
      </p>
    </div>
  );
}
