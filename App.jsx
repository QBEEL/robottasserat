import React from 'react'
import { Button } from './components/Button'
import { Card, CardContent, CardHeader, CardTitle } from './components/Card'
import { Input, Textarea } from './components/Input'
import { CheckCircle, Mail, Phone, MapPin, ArrowRight, Star, Users, Clock, Rocket, BookOpen, Cpu, Palette, Drone, GraduationCap } from 'lucide-react'

const NAV = [
  { label: 'Курсы', href: '#courses' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'О нас', href: '#about' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
]

const COURSES = [
  { icon: <Cpu className='w-6 h-6' />, title: 'Программирование для детей', age: '8–16 лет', desc: 'Scratch / Python / веб‑основы. Учимся мыслить, а не зубрить.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
  { icon: <Drone className='w-6 h-6' />, title: 'Дроны и аэросъёмка', age: '10–16 лет', desc: 'Сборка, управление, основы безопасности и съёмки.', img: 'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=1200&auto=format&fit=crop' },
  { icon: <Palette className='w-6 h-6' />, title: 'Дизайн и графика', age: '9–16 лет', desc: 'Композиция, цвет, Canva/Figma, первые проекты.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
  { icon: <BookOpen className='w-6 h-6' />, title: 'Робототехника', age: '7–14 лет', desc: 'Конструкторы, датчики, алгоритмы. Инженерное мышление.', img: 'https://images.unsplash.com/photo-1568684338858-96b28e6f65e8?q=80&w=1200&auto=format&fit=crop' },
]

const BENEFITS = [
  { icon: <Star className='w-6 h-6' />, title: 'Практика с первого занятия', desc: 'Делаем реальные мини‑проекты: сайты, прототипы, роботы, анимации.' },
  { icon: <Users className='w-6 h-6' />, title: 'Малые группы', desc: 'До 10 человек, внимание каждому ребенку.' },
  { icon: <Clock className='w-6 h-6' />, title: 'Удобное расписание', desc: 'Выходные и будни, очно и онлайн.' },
  { icon: <Rocket className='w-6 h-6' />, title: 'Портфолио ребёнка', desc: 'Собираем кейсы для поступления и олимпиад.' },
]

const REVIEWS = [
  { name: 'Анна К.', text: 'Ребёнок впервые загорелся программированием. Домой приносит мини‑игры и сайты!' },
  { name: 'Игорь П.', text: 'Классные преподаватели‑практики. Видно, что сами делают проекты.' },
  { name: 'Мария Л.', text: 'Очень понравились занятия с дронами, аккуратно и безопасно, много практики.' },
]

export default function App() {
  return (
    <div className='min-h-screen bg-white text-slate-900'>
      <header className='sticky top-0 z-50 backdrop-blur bg-white/80 border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center gap-3'>
              <GraduationCap className='w-7 h-7' />
              <span className='font-bold text-xl'>EduCenter</span>
            </div>
            <nav className='hidden md:flex items-center gap-6'>
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className='text-sm hover:text-slate-700'>{n.label}</a>
              ))}
            </nav>
            <div className='hidden md:block'>
              <a href='#lead' className='inline-flex items-center gap-2 text-sm font-medium'>
                Записаться <ArrowRight className='w-4 h-4' />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none' aria-hidden>
          <div className='absolute -top-24 -right-24 w-72 h-72 bg-indigo-100 rounded-full blur-3xl' />
          <div className='absolute -bottom-24 -left-24 w-72 h-72 bg-rose-100 rounded-full blur-3xl' />
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 items-center gap-10'>
          <div>
            <p className='inline-block text-xs font-semibold tracking-wider uppercase mb-3 text-indigo-600'>Современное доп‑образование для детей</p>
            <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>Технологии, творчество и инженерное мышление — <span className='underline decoration-indigo-300'>с интереса к результату</span></h1>
            <p className='mt-6 text-slate-600 max-w-2xl'>Помогаем детям 7–16 лет делать первые шаги в IT, дизайне и инженерии. Проекты с первых уроков, забота и безопасность.</p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <a href='#courses'><Button className='px-6 py-3 text-base'>Выбрать курс</Button></a>
              <a href='#lead'><Button variant='outline' className='px-6 py-3 text-base'>Получить консультацию</Button></a>
            </div>
            <div className='mt-6 flex items-center gap-4 text-sm text-slate-500'>
              <div className='flex items-center gap-1'><CheckCircle className='w-4 h-4' /> Первая пробная — бесплатно</div>
              <div className='flex items-center gap-1'><CheckCircle className='w-4 h-4' /> Группы до 10 человек</div>
            </div>
          </div>
          <div className='relative'>
            <img src='https://images.unsplash.com/photo-1581091870627-3b5f84b1a84a?q=80&w=1200&auto=format&fit=crop' alt='Kids learning technology' className='rounded-3xl shadow-xl w-full object-cover' />
          </div>
        </div>
      </section>

      <section id='courses' className='py-16 lg:py-24 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-end justify-between gap-6 mb-10'>
            <div>
              <h2 className='text-3xl font-bold'>Наши курсы</h2>
              <p className='text-slate-600 mt-2'>Подберите направление по интересам ребёнка.</p>
            </div>
            <a href='#lead' className='hidden md:inline-flex text-sm items-center gap-2'>Нужна помощь с выбором? <ArrowRight className='w-4 h-4' /></a>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {COURSES.map((c, idx) => (
              <Card key={idx} className='rounded-2xl overflow-hidden hover:shadow-lg transition-shadow'>
                <div className='h-36 w-full overflow-hidden'>
                  <img src={c.img} alt={c.title} className='w-full h-full object-cover' />
                </div>
                <CardHeader className='pb-2'>
                  <div className='flex items-center gap-2 text-indigo-600'>{c.icon}<span className='text-xs font-medium'>{c.age}</span></div>
                  <CardTitle className='leading-tight text-lg'>{c.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-slate-600'>{c.desc}</p>
                  <div className='mt-4'>
                    <Button className='w-full'>Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id='benefits' className='py-16 lg:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold'>Почему нас выбирают</h2>
              <p className='text-slate-600 mt-3'>Даём не только навыки, но и уверенность в собственных силах. Каждое занятие — маленький проект, каждый модуль — готовый результат.</p>
              <div className='mt-8 grid sm:grid-cols-2 gap-6'>
                {BENEFITS.map((b, i) => (
                  <div key={i} className='flex items-start gap-3'>
                    <div className='p-2 rounded-xl bg-indigo-50 text-indigo-600'>{b.icon}</div>
                    <div>
                      <div className='font-semibold'>{b.title}</div>
                      <div className='text-sm text-slate-600'>{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='relative'>
              <img src='https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop' alt='Classroom' className='rounded-3xl shadow-xl w-full object-cover' />
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='py-16 lg:py-24 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold'>О центре</h2>
              <p className='mt-3 text-slate-600'>Мы — команда педагогов‑практиков. Наши преподаватели — разработчики, инженеры, дизайнеры. Занятия строим по принципу «сначала пробуем, потом обсуждаем». Безопасность и бережное отношение — на первом месте.</p>
              <ul className='mt-6 space-y-3 text-sm'>
                <li className='flex items-center gap-2'><CheckCircle className='w-4 h-4 text-green-600'/> Собственное оборудование и ПО</li>
                <li className='flex items-center gap-2'><CheckCircle className='w-4 h-4 text-green-600'/> Сертификаты по итогам модулей</li>
                <li className='flex items-center gap-2'><CheckCircle className='w-4 h-4 text-green-600'/> Очно и онлайн</li>
              </ul>
            </div>
            <div className='grid sm:grid-cols-2 gap-4'>
              <img src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop' className='rounded-2xl object-cover h-56 w-full'/>
              <img src='https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800&auto=format&fit=crop' className='rounded-2xl object-cover h-56 w-full'/>
              <img src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop' className='rounded-2xl object-cover h-56 w-full'/>
              <img src='https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop' className='rounded-2xl object-cover h-56 w-full'/>
            </div>
          </div>
        </div>
      </section>

      <section id='reviews' className='py-16 lg:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-10'>Отзывы родителей</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {REVIEWS.map((r, i) => (
              <Card key={i} className='rounded-2xl'>
                <CardHeader>
                  <CardTitle className='text-base flex items-center gap-2'><Star className='w-5 h-5 text-yellow-500'/> {r.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-slate-600'>{r.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id='lead' className='py-16 lg:py-24 bg-indigo-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center'>
          <div>
            <h2 className='text-3xl font-bold'>Запишитесь на бесплатное пробное занятие</h2>
            <p className='mt-3 text-indigo-100'>Оставьте контакты — менеджер свяжется и поможет выбрать курс.</p>
            <ul className='mt-6 space-y-2 text-indigo-100 text-sm'>
              <li className='flex items-center gap-2'><Phone className='w-4 h-4'/> +7 (999) 123‑45‑67</li>
              <li className='flex items-center gap-2'><Mail className='w-4 h-4'/> hello@educenter.ru</li>
            </ul>
          </div>
          <Card className='rounded-2xl bg-white text-slate-900'>
            <CardHeader>
              <CardTitle className='text-xl'>Заявка на консультацию</CardTitle>
            </CardHeader>
            <CardContent>
              <form className='space-y-4' onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
                <Input placeholder='Имя родителя' required />
                <Input placeholder='Имя ребёнка' />
                <Input type='tel' placeholder='Телефон' required />
                <Input type='email' placeholder='Email (необязательно)' />
                <Textarea placeholder='Интересующий курс / возраст / удобное время' rows={4} />
                <Button type='submit' className='w-full'>Отправить</Button>
                <p className='text-xs text-slate-500'>Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id='contacts' className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10'>
          <div>
            <h3 className='text-2xl font-bold mb-4'>Контакты</h3>
            <p className='text-slate-600'>Мы на связи каждый день с 10:00 до 20:00.</p>
            <div className='mt-6 space-y-2 text-sm'>
              <div className='flex items-center gap-2'><MapPin className='w-4 h-4'/> Ваш город, ул. Примерная, 1</div>
              <div className='flex items-center gap-2'><Phone className='w-4 h-4'/> +7 (999) 123‑45‑67</div>
              <div className='flex items-center gap-2'><Mail className='w-4 h-4'/> hello@educenter.ru</div>
            </div>
          </div>
          <div className='rounded-2xl overflow-hidden bg-slate-100 h-72 flex items-center justify-center'>
            <span className='text-slate-500 text-sm'>Тут будет карта (Яндекс/Google)</span>
          </div>
        </div>
      </section>

      <footer className='py-8 border-t'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-2'>
            <GraduationCap className='w-5 h-5' />
            <span className='text-sm'>© {new Date().getFullYear()} EduCenter. Все права защищены.</span>
          </div>
          <div className='flex gap-4 text-sm text-slate-500'>
            <a href='#' className='hover:text-slate-700'>Политика конфиденциальности</a>
            <a href='#' className='hover:text-slate-700'>Договор оферты</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
