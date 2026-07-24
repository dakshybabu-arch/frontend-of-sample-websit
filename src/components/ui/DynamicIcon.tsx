import {
  Car, Heart, Users, Sparkles, GraduationCap, UsersRound,
  Briefcase, Compass, Palmtree, Building, ShieldCheck,
  IndianRupee, Headphones, HeartHandshake, Map, Lock, Zap, Trophy
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'car': Car,
  'heart': Heart,
  'users': Users,
  'sparkles': Sparkles,
  'graduation-cap': GraduationCap,
  'users-round': UsersRound,
  'briefcase': Briefcase,
  'compass': Compass,
  'palm-tree': Palmtree,
  'building': Building,
  'shield-check': ShieldCheck,
  'indian-rupee': IndianRupee,
  'headphones': Headphones,
  'heart-handshake': HeartHandshake,
  'map': Map,
  'lock': Lock,
  'zap': Zap,
  'trophy': Trophy,
};

interface DynamicIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function DynamicIcon({ name, size = 24, className }: DynamicIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return <Sparkles size={size} className={className} />;
  return <IconComponent size={size} className={className} />;
}
