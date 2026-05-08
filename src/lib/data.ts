import { HomeIcon, Building2, HardHat, Mail, Phone, MapPin, Eye, Handshake, Target, Users, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
];

export const services = [
  {
    icon: HomeIcon,
    title: 'Residential Construction',
    description: 'From custom homes to renovations, we bring your vision to life with quality craftsmanship.',
    link: '/services',
  },
  {
    icon: Building2,
    title: 'Commercial Projects',
    description: 'We build functional and inspiring commercial spaces that meet your business needs.',
    link: '/services',
  },
  {
    icon: HardHat,
    title: 'Industrial Solutions',
    description: 'Specializing in large-scale industrial facilities with a focus on safety and efficiency.',
    link: '/services',
  },
];

export const servicesData = [
  {
    id: 'residential',
    title: 'Residential Construction',
    description: 'We specialize in creating beautiful, high-quality homes that stand the test of time. From custom new builds to large-scale renovations, our team ensures every detail is perfect.',
    features: [
      'Custom Home Building',
      'Luxury Residences',
      'Multi-Family Housing',
      'Renovations & Additions',
      'Sustainable Building Practices',
    ],
    imageId: 'residential-service',
  },
  {
    id: 'commercial',
    title: 'Commercial Projects',
    description: 'Our commercial construction services are designed to create functional, modern, and inspiring spaces for businesses to thrive. We manage projects of all sizes, from retail fit-outs to new office complexes.',
    features: [
      'Office Buildings',
      'Retail & Shopping Centers',
      'Hospitality & Hotels',
      'Healthcare Facilities',
      'Tenant Improvements',
    ],
    imageId: 'commercial-service',
  },
  {
    id: 'industrial',
    title: 'Industrial Solutions',
    description: 'Ar Constructions and Real Estate has extensive experience in industrial construction, delivering robust and efficient facilities. We prioritize safety, logistics, and operational excellence in every project.',
    features: [
      'Warehousing & Distribution Centers',
      'Manufacturing Plants',
      'Cold Storage Facilities',
      'Data Centers',
      'Industrial Parks',
    ],
    imageId: 'industrial-service',
  },
];

export const teamMembers = [
  {
    name: 'Shaik Abdul Rehman',
    title: 'Founder & CEO',
    imageId: 'team-member-1',
  },
  {
    name: 'Shaik Amaan',
    title: 'Head of Operations',
    imageId: 'team-member-2',
  },
  {
    name: 'Syed Sameer',
    title: 'Lead Architect',
    imageId: 'team-member-3',
  },
];

export const values = [
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity in all of our actions.'
    },
    {
      icon: Target,
      title: 'Quality',
      description: 'We provide outstanding craftsmanship and unsurpassed service that, together, deliver premium value to our clients.'
    },
    {
      icon: Users,
      title: 'Commitment',
      description: 'We are committed to our clients, our team members, our community, and to building a better future.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We embrace innovation and are always looking for new and better ways to serve our clients.'
    },
];

export const contactDetails = [
  {
    icon: MapPin,
    title: 'Our Office',
    text: '4th floor, chandra vilas complex, opposite Chandana shopping mall, CTM Road, Madanapalli.',
  },
  {
    icon: Mail,
    title: 'Email Us',
    text: 'arconstructionsandrealestates@gmail.com',
    href: 'mailto:arconstructionsandrealestates@gmail.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    text: '+91 9666909414',
    href: 'tel:+919666909414',
  },
];

export const projectCategories = ['All', 'Residential', 'Commercial', 'Industrial'];

export const footerNavLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];
