import React from 'react';
import { Container } from '@/shared/ui';
import appConfig from '@/shared/config/app.config.json';
import { phoneFormat } from '@/shared/lib/phone-format';

export const Footer: React.FC = () => {
  const { contacts, appName } = appConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{appName}</h3>
            <p className="text-gray-400">
              Современная медицинская клиника с опытными специалистами
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`tel:${contacts.phone}`} className="hover:text-[#21CDAA] transition-colors">
                  {phoneFormat(contacts.phone)}
                </a>
              </li>
              <li>
                <a href={`mailto:${contacts.email}`} className="hover:text-[#21CDAA] transition-colors">
                  {contacts.email}
                </a>
              </li>
              <li>{contacts.address}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Пн-Пт: 8:00 - 20:00</li>
              <li>Сб: 9:00 - 18:00</li>
              <li>Вс: 9:00 - 15:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {appName}. Все права защищены.</p>
        </div>
      </Container>
    </footer>
  );
};
