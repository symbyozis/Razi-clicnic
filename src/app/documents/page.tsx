import React from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Container } from '@/shared/ui';

export default function DocumentsPage() {
  const documents = [
    { title: 'Лицензия на медицинскую деятельность', file: '#' },
    { title: 'Сертификаты специалистов', file: '#' },
    { title: 'Договор на оказание медицинских услуг', file: '#' },
    { title: 'Политика конфиденциальности', file: '#' },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="py-16">
          <Container>
            <h1 className="text-5xl font-bold mb-12 text-gray-900">Документы</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.file}
                  className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">📄</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#21CDAA] transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-gray-500">Скачать документ</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
