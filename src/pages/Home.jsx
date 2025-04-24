import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-900 text-white py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">HVE High Voltage Engineers</h1>
          <nav className="space-x-4">
            <a href="#services" className="hover:underline">{t('services')}</a>
            <a href="#about" className="hover:underline">{t('about')}</a>
            <a href="#contact" className="hover:underline">{t('contact')}</a>
            <span className="ml-4">
              <button onClick={() => i18n.changeLanguage('es')} className="mr-2">ES</button>
              <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            </span>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="text-center py-20">
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg mb-6">{t('subtitle')}</p>
          <Button className="text-lg px-6 py-3">{t('contact_button')}</Button>
        </section>

        <section id="services" className="py-16">
          <h3 className="text-3xl font-semibold text-center mb-10">{t('services')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card><CardContent className="p-6"><h4 className="text-xl font-bold mb-2">Diseño de Subestaciones</h4><p>Planificación y desarrollo de subestaciones de alta, media y baja tensión.</p></CardContent></Card>
            <Card><CardContent className="p-6"><h4 className="text-xl font-bold mb-2">Estudios Eléctricos</h4><p>Estudios de cortocircuito, flujo de carga y coordinación de protecciones.</p></CardContent></Card>
            <Card><CardContent className="p-6"><h4 className="text-xl font-bold mb-2">Supervisión de Proyectos</h4><p>Asistencia técnica y supervisión durante la ejecución de proyectos eléctricos.</p></CardContent></Card>
          </div>
        </section>

        <section id="about" className="py-16 bg-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4">{t('about')}</h3>
            <p className="text-lg">En HVE contamos con un equipo de ingenieros especializados en sistemas de potencia con más de 15 años de experiencia en el sector energético. Nuestro compromiso es ofrecer soluciones técnicas seguras, eficientes y a medida.</p>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">{t('contact')}</h3>
            <p className="mb-6">¿Tienes un proyecto en mente? Estamos aquí para ayudarte.</p>
            <form className="space-y-4">
              <input type="text" placeholder={t('form_name')} className="w-full p-3 border rounded-xl" />
              <input type="email" placeholder={t('form_email')} className="w-full p-3 border rounded-xl" />
              <textarea placeholder={t('form_message')} className="w-full p-3 border rounded-xl h-32"></textarea>
              <Button type="submit" className="w-full text-lg py-3">{t('form_submit')}</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 HVE High Voltage Engineers. {t('footer')}</p>
      </footer>
    </div>
  );
}