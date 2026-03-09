import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Clear existing FAQs
    await prisma.fAQ.deleteMany();

    // Seed FAQs
    const faqs = [
        // GENERAL Category
        {
            question_es: '¿Qué es Mallorca Sport Events?',
            answer_es:
                'Mallorca Sport Events es una organización dedicada a crear experiencias deportivas únicas en Mallorca. Organizamos eventos de fitness, ciclismo y deportes de resistencia con los más altos estándares de calidad.',
            question_en: 'What is Mallorca Sport Events?',
            answer_en:
                'Mallorca Sport Events is an organization dedicated to creating unique sports experiences in Mallorca. We organize fitness, cycling, and endurance sports events with the highest quality standards.',
            question_de: 'Was ist Mallorca Sport Events?',
            answer_de:
                'Mallorca Sport Events ist eine Organisation, die sich der Schaffung einzigartiger Sporterlebnisse auf Mallorca widmet. Wir organisieren Fitness-, Radsport- und Ausdauersportveranstaltungen mit höchsten Qualitätsstandards.',
            category: 'general',
            order: 1,
        },
        {
            question_es: '¿Cuántos eventos organizan al año?',
            answer_es:
                'Actualmente organizamos 3 grandes eventos anuales: Mallorca Fitness Weekend (mayo), Rad am Ring Mallorca (septiembre) y la Ruta Ultrafondo Solidaria Madrid-Sevilla (octubre).',
            question_en: 'How many events do you organize per year?',
            answer_en:
                'We currently organize 3 major annual events: Mallorca Fitness Weekend (May), Rad am Ring Mallorca (September), and the Madrid-Seville Solidarity Ultra-Endurance Route (October).',
            question_de: 'Wie viele Veranstaltungen organisieren Sie pro Jahr?',
            answer_de:
                'Wir organisieren derzeit 3 große jährliche Veranstaltungen: Mallorca Fitness Weekend (Mai), Rad am Ring  Mallorca (September) und die Madrid-Sevilla Solidaritäts-Ultra-Ausdauer-Route (Oktober).',
            category: 'general',
            order: 2,
        },

        // TICKETS Category
        {
            question_es: '¿Cuándo salen los tickets a la venta?',
            answer_es:
                'Los tickets se publican entre 4-6 meses antes de cada evento. Suscríbete a nuestra newsletter para recibir notificaciones de early bird y ofertas exclusivas.',
            question_en: 'When do tickets go on sale?',
            answer_en:
                'Tickets are released 4-6 months before each event. Subscribe to our newsletter to receive early bird notifications and exclusive offers.',
            question_de: 'Wann gehen die Tickets in den Verkauf?',
            answer_de:
                'Tickets werden 4-6 Monate vor jeder Veranstaltung veröffentlicht. Abonnieren Sie unseren Newsletter, um Early-Bird-Benachrichtigungen und exklusive Angebote zu erhalten.',
            category: 'tickets',
            order: 1,
        },
        {
            question_es: '¿Hay reembolso si no puedo asistir?',
            answer_es:
                'Los tickets tienen reembolso completo hasta 30 días antes del evento, 50% de reembolso entre 30-15 días, y no hay reembolso con menos de 15 días de antelación. Consulta los términos específicos de cada evento.',
            question_en: 'Is there a refund if I cannot attend?',
            answer_en:
                'Tickets have a full refund up to 30 days before the event, 50% refund between 30-15 days, and no refund with less than 15 days notice. Check the specific terms of each event.',
            question_de: 'Gibt es eine Rückerstattung, wenn ich nicht teilnehmen kann?',
            answer_de:
                'Tickets haben eine vollständige Rückerstattung bis 30 Tage vor der Veranstaltung, 50% Rückerstattung zwischen 30-15 Tagen und keine Rückerstattung mit weniger als 15 Tagen Vorlauf. Überprüfen Sie die spezifischen Bedingungen jeder Veranstaltung.',
            category: 'tickets',
            order: 2,
        },
        {
            question_es: '¿Puedo transferir mi entrada a otra persona?',
            answer_es:
                'Sí, las entradas son transferibles. Solo necesitas contactarnos con los datos del nuevo participante al menos 7 días antes del evento.',
            question_en: 'Can I transfer my ticket to someone else?',
            answer_en:
                'Yes, tickets are transferable. You just need to contact us with the details of the new participant at least 7 days before the event.',
            question_de: 'Kann ich mein Ticket auf eine andere Person übertragen?',
            answer_de:
                'Ja, Tickets sind übertragbar. Sie müssen uns nur mindestens 7 Tage vor der Veranstaltung mit den Details des neuen Teilnehmers kontaktieren.',
            category: 'tickets',
            order: 3,
        },

        // VENUE Category
        {
            question_es: '¿Dónde se realizan los eventos?',
            answer_es:
                'Los eventos se realizan en diferentes ubicaciones de Mallorca. El Fitness Weekend se celebra en MOTORWORLD Mallorca, Rad am Ring recorre toda la isla, y la Ruta Solidaria va de Madrid a Sevilla.',
            question_en: 'Where are the events held?',
            answer_en:
                'Events are held in different locations in Mallorca. The Fitness Weekend is held in MOTORWORLD Mallorca, Rad am Ring tours the entire island, and the Solidarity Route goes from Madrid to Seville.',
            question_de: 'Wo finden die Veranstaltungen statt?',
            answer_de:
                'Die Veranstaltungen finden an verschiedenen Orten auf Mallorca statt. Das Fitness Weekend findet in MOTORWORLD Mallorca statt, Rad am Ring führt über die gesamte Insel, und die Solidaritätsroute führt von Madrid nach Sevilla.',
            category: 'venue',
            order: 1,
        },
        {
            question_es: '¿Hay parking disponible?',
            answer_es:
                'Sí, todos nuestros eventos cuentan con parking gratuito para participantes. Se enviarán detalles de acceso por email una semana antes del evento.',
            question_en: 'Is parking available?',
            answer_en:
                'Yes, all our events have free parking for participants. Access details will be sent by email one week before the event.',
            question_de: 'Ist Parken verfügbar?',
            answer_de:
                'Ja, alle unsere Veranstaltungen haben kostenloses Parken für Teilnehmer. Die Zugangsdaten werden eine Woche vor der Veranstaltung per E-Mail gesendet.',
            category: 'venue',
            order: 2,
        },

        // TRAVEL Category
        {
            question_es: '¿Ofrecen paquetes de alojamiento?',
            answer_es:
                'Sí, tenemos acuerdos con hoteles locales para ofrecer tarifas especiales. Los paquetes VIP incluyen alojamiento. Consulta la página de cada evento para más detalles.',
            question_en: 'Do you offer accommodation packages?',
            answer_en:
                'Yes, we have agreements with local hotels to offer special rates. VIP packages include accommodation. Check each event page for more details.',
            question_de: 'Bieten Sie Unterkunftspakete an?',
            answer_de:
                'Ja, wir haben Vereinbarungen mit lokalen Hotels, um Sonderpreise anzubieten. VIP-Pakete beinhalten Unterkunft. Überprüfen Sie jede Veranstaltungsseite für weitere Details.',
            category: 'travel',
            order: 1,
        },
        {
            question_es: '¿Cómo llegar al aeropuerto de Palma?',
            answer_es:
                'El aeropuerto de Palma está a 20-30 minutos del centro. Recomendamos reservar transfer privado o alquilar coche. También ofrecemos servicio de shuttle desde el aeropuerto para eventos (consulta disponibilidad).',
            question_en: 'How to get to Palma airport?',
            answer_en:
                'Palma airport is 20-30 minutes from the center. We recommend booking a private transfer or renting a car. We also offer shuttle service from the airport for events (check availability).',
            question_de: 'Wie komme ich zum Flughafen Palma?',
            answer_de:
                'Der Flughafen Palma ist 20-30 Minuten vom Zentrum entfernt. Wir empfehlen, einen privaten Transfer zu buchen oder ein Auto zu mieten. Wir bieten auch einen Shuttle-Service vom Flughafen für Veranstaltungen an (Verfügbarkeit prüfen).',
            category: 'travel',
            order: 2,
        },
    ];

    // Create FAQs
    for (const faq of faqs) {
        await prisma.fAQ.create({
            data: faq,
        });
    }

    console.log(`✅ Seeded ${faqs.length} FAQs`);
    console.log('✅ Database seeding completed!');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('❌ Error seeding database:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
