/**
 * Practice Texts - Bilingual (German/English)
 * Progressive difficulty from absolute beginner to expert
 */

export interface PracticeText {
  id: string;
  textDe: string;
  textEn: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  category: 'micro' | 'simple' | 'medium' | 'complex' | 'expert';
  description?: string;
}

/**
 * ============================================================================
 * MICRO EXERCISES - Level 1 (Absolute Beginners)
 * Single letters, two-letter combinations, very short words
 * ============================================================================
 */
export const MICRO_EXERCISES: PracticeText[] = [
  // Single letter repetitions - Home Row
  { id: 'micro-01', textDe: 'f f f f f f f f f f', textEn: 'f f f f f f f f f f', level: 1, category: 'micro', description: 'F key only' },
  { id: 'micro-02', textDe: 'j j j j j j j j j j', textEn: 'j j j j j j j j j j', level: 1, category: 'micro', description: 'J key only' },
  { id: 'micro-03', textDe: 'd d d d d d d d d d', textEn: 'd d d d d d d d d d', level: 1, category: 'micro', description: 'D key only' },
  { id: 'micro-04', textDe: 'k k k k k k k k k k', textEn: 'k k k k k k k k k k', level: 1, category: 'micro', description: 'K key only' },
  { id: 'micro-05', textDe: 's s s s s s s s s s', textEn: 's s s s s s s s s s', level: 1, category: 'micro', description: 'S key only' },
  { id: 'micro-06', textDe: 'l l l l l l l l l l', textEn: 'l l l l l l l l l l', level: 1, category: 'micro', description: 'L key only' },
  { id: 'micro-07', textDe: 'a a a a a a a a a a', textEn: 'a a a a a a a a a a', level: 1, category: 'micro', description: 'A key only' },
  
  // Two-letter combinations - Same hand
  { id: 'micro-08', textDe: 'as as as as as as as', textEn: 'as as as as as as as', level: 1, category: 'micro', description: 'AS combination' },
  { id: 'micro-09', textDe: 'df df df df df df df', textEn: 'df df df df df df df', level: 1, category: 'micro', description: 'DF combination' },
  { id: 'micro-10', textDe: 'jk jk jk jk jk jk jk', textEn: 'jk jk jk jk jk jk jk', level: 1, category: 'micro', description: 'JK combination' },
  { id: 'micro-11', textDe: 'kl kl kl kl kl kl kl', textEn: 'kl kl kl kl kl kl kl', level: 1, category: 'micro', description: 'KL combination' },
  
  // Two-letter combinations - Alternating hands
  { id: 'micro-12', textDe: 'fj fj fj fj fj fj fj', textEn: 'fj fj fj fj fj fj fj', level: 1, category: 'micro', description: 'FJ alternating' },
  { id: 'micro-13', textDe: 'dk dk dk dk dk dk dk', textEn: 'dk dk dk dk dk dk dk', level: 1, category: 'micro', description: 'DK alternating' },
  { id: 'micro-14', textDe: 'sl sl sl sl sl sl sl', textEn: 'sl sl sl sl sl sl sl', level: 1, category: 'micro', description: 'SL alternating' },
  { id: 'micro-15', textDe: 'aj aj aj aj aj aj aj', textEn: 'aj aj aj aj aj aj aj', level: 1, category: 'micro', description: 'AJ alternating' },
  
  // Very short words (2-3 letters)
  { id: 'micro-16', textDe: 'da da da da da da da', textEn: 'do do do do do do do', level: 1, category: 'micro', description: 'Simple word' },
  { id: 'micro-17', textDe: 'ja ja ja ja ja ja ja', textEn: 'if if if if if if if', level: 1, category: 'micro', description: 'Simple word' },
  { id: 'micro-18', textDe: 'so so so so so so so', textEn: 'so so so so so so so', level: 1, category: 'micro', description: 'Simple word' },
  { id: 'micro-19', textDe: 'an an an an an an an', textEn: 'an an an an an an an', level: 1, category: 'micro', description: 'Simple word' },
  { id: 'micro-20', textDe: 'das das das das das', textEn: 'the the the the the', level: 1, category: 'micro', description: 'Common word' },
  
  // Home row words
  { id: 'micro-21', textDe: 'lass lass lass lass', textEn: 'fall fall fall fall', level: 1, category: 'micro', description: 'Home row word' },
  { id: 'micro-22', textDe: 'falls falls falls', textEn: 'shall shall shall', level: 1, category: 'micro', description: 'Home row word' },
  { id: 'micro-23', textDe: 'salsa salsa salsa', textEn: 'salad salad salad', level: 1, category: 'micro', description: 'Home row word' },
  
  // Adding vowels E and I
  { id: 'micro-24', textDe: 'e e e e e e e e e e', textEn: 'e e e e e e e e e e', level: 1, category: 'micro', description: 'E key only' },
  { id: 'micro-25', textDe: 'i i i i i i i i i i', textEn: 'i i i i i i i i i i', level: 1, category: 'micro', description: 'I key only' },
  { id: 'micro-26', textDe: 'die die die die die', textEn: 'the the the the the', level: 1, category: 'micro', description: 'With E' },
  { id: 'micro-27', textDe: 'sie sie sie sie sie', textEn: 'she she she she she', level: 1, category: 'micro', description: 'With I and E' },
  { id: 'micro-28', textDe: 'sei sei sei sei sei', textEn: 'lie lie lie lie lie', level: 1, category: 'micro', description: 'With E and I' },
  
  // Adding more common letters
  { id: 'micro-29', textDe: 'r r r r r r r r r r', textEn: 'r r r r r r r r r r', level: 1, category: 'micro', description: 'R key only' },
  { id: 'micro-30', textDe: 'der der der der der', textEn: 'red red red red red', level: 1, category: 'micro', description: 'With R' },
];

/**
 * ============================================================================
 * SIMPLE TEXTS - Level 1-2 (Beginners)
 * Short sentences (3-5 words), everyday phrases
 * ============================================================================
 */
export const SIMPLE_TEXTS: PracticeText[] = [
  // Very basic sentences (3-4 words)
  { id: 'simple-01', textDe: 'Das ist gut.', textEn: 'This is good.', level: 1, category: 'simple' },
  { id: 'simple-02', textDe: 'Ich bin hier.', textEn: 'I am here.', level: 1, category: 'simple' },
  { id: 'simple-03', textDe: 'Er ist da.', textEn: 'He is there.', level: 1, category: 'simple' },
  { id: 'simple-04', textDe: 'Sie geht weg.', textEn: 'She goes away.', level: 1, category: 'simple' },
  { id: 'simple-05', textDe: 'Wir sind hier.', textEn: 'We are here.', level: 1, category: 'simple' },
  
  // Basic questions
  { id: 'simple-06', textDe: 'Wie geht es?', textEn: 'How are you?', level: 1, category: 'simple' },
  { id: 'simple-07', textDe: 'Was ist das?', textEn: 'What is this?', level: 1, category: 'simple' },
  { id: 'simple-08', textDe: 'Wo bist du?', textEn: 'Where are you?', level: 1, category: 'simple' },
  { id: 'simple-09', textDe: 'Wer ist das?', textEn: 'Who is that?', level: 1, category: 'simple' },
  { id: 'simple-10', textDe: 'Wann kommst du?', textEn: 'When are you coming?', level: 1, category: 'simple' },
  
  // Common phrases
  { id: 'simple-11', textDe: 'Guten Morgen!', textEn: 'Good morning!', level: 1, category: 'simple' },
  { id: 'simple-12', textDe: 'Gute Nacht!', textEn: 'Good night!', level: 1, category: 'simple' },
  { id: 'simple-13', textDe: 'Danke sehr!', textEn: 'Thank you!', level: 1, category: 'simple' },
  { id: 'simple-14', textDe: 'Bitte schon!', textEn: 'You are welcome!', level: 1, category: 'simple' },
  { id: 'simple-15', textDe: 'Bis bald!', textEn: 'See you soon!', level: 1, category: 'simple' },
  
  // Slightly longer (5-6 words)
  { id: 'simple-16', textDe: 'Ich gehe jetzt nach Hause.', textEn: 'I am going home now.', level: 2, category: 'simple' },
  { id: 'simple-17', textDe: 'Das Wetter ist heute schön.', textEn: 'The weather is nice today.', level: 2, category: 'simple' },
  { id: 'simple-18', textDe: 'Ich habe einen Hund.', textEn: 'I have a dog.', level: 2, category: 'simple' },
  { id: 'simple-19', textDe: 'Sie liest ein Buch.', textEn: 'She reads a book.', level: 2, category: 'simple' },
  { id: 'simple-20', textDe: 'Er trinkt einen Kaffee.', textEn: 'He drinks a coffee.', level: 2, category: 'simple' },
  
  // Numbers and time
  { id: 'simple-21', textDe: 'Es ist zehn Uhr.', textEn: 'It is ten o clock.', level: 2, category: 'simple' },
  { id: 'simple-22', textDe: 'Ich bin 25 Jahre alt.', textEn: 'I am 25 years old.', level: 2, category: 'simple' },
  { id: 'simple-23', textDe: 'Heute ist Montag.', textEn: 'Today is Monday.', level: 2, category: 'simple' },
  { id: 'simple-24', textDe: 'Wir treffen uns um 3.', textEn: 'We meet at 3.', level: 2, category: 'simple' },
  { id: 'simple-25', textDe: 'Das kostet 10 Euro.', textEn: 'This costs 10 euros.', level: 2, category: 'simple' },
];

/**
 * ============================================================================
 * MEDIUM TEXTS - Level 2-3 (Intermediate)
 * Longer sentences, proverbs, everyday situations
 * ============================================================================
 */
export const MEDIUM_TEXTS: PracticeText[] = [
  // Proverbs and sayings
  { id: 'medium-01', textDe: 'Der frühe Vogel fängt den Wurm.', textEn: 'The early bird catches the worm.', level: 2, category: 'medium' },
  { id: 'medium-02', textDe: 'Übung macht den Meister.', textEn: 'Practice makes perfect.', level: 2, category: 'medium' },
  { id: 'medium-03', textDe: 'Wer nicht wagt, der nicht gewinnt.', textEn: 'Nothing ventured, nothing gained.', level: 2, category: 'medium' },
  { id: 'medium-04', textDe: 'Steter Tropfen höhlt den Stein.', textEn: 'Constant dripping wears away the stone.', level: 2, category: 'medium' },
  { id: 'medium-05', textDe: 'Viele Wege führen nach Rom.', textEn: 'All roads lead to Rome.', level: 2, category: 'medium' },
  
  // Everyday situations
  { id: 'medium-06', textDe: 'Ich möchte einen Tisch für zwei Personen reservieren.', textEn: 'I would like to reserve a table for two people.', level: 3, category: 'medium' },
  { id: 'medium-07', textDe: 'Können Sie mir bitte helfen?', textEn: 'Can you please help me?', level: 2, category: 'medium' },
  { id: 'medium-08', textDe: 'Wo ist der nächste Supermarkt?', textEn: 'Where is the nearest supermarket?', level: 2, category: 'medium' },
  { id: 'medium-09', textDe: 'Ich habe meine Schlüssel verloren.', textEn: 'I have lost my keys.', level: 2, category: 'medium' },
  { id: 'medium-10', textDe: 'Das Meeting beginnt um neun Uhr.', textEn: 'The meeting starts at nine o clock.', level: 2, category: 'medium' },
  
  // Work related
  { id: 'medium-11', textDe: 'Ich muss heute länger arbeiten.', textEn: 'I have to work longer today.', level: 2, category: 'medium' },
  { id: 'medium-12', textDe: 'Die Präsentation war sehr gut.', textEn: 'The presentation was very good.', level: 2, category: 'medium' },
  { id: 'medium-13', textDe: 'Bitte senden Sie mir den Bericht per Email.', textEn: 'Please send me the report by email.', level: 3, category: 'medium' },
  { id: 'medium-14', textDe: 'Wir haben ein wichtiges Projekt abgeschlossen.', textEn: 'We have completed an important project.', level: 3, category: 'medium' },
  { id: 'medium-15', textDe: 'Der Kunde ist mit dem Ergebnis zufrieden.', textEn: 'The customer is satisfied with the result.', level: 3, category: 'medium' },
  
  // Travel and leisure
  { id: 'medium-16', textDe: 'Ich möchte ein Zugticket nach Berlin kaufen.', textEn: 'I would like to buy a train ticket to Berlin.', level: 3, category: 'medium' },
  { id: 'medium-17', textDe: 'Das Hotel liegt direkt am Strand.', textEn: 'The hotel is right on the beach.', level: 2, category: 'medium' },
  { id: 'medium-18', textDe: 'Wir haben unseren Flug verpasst.', textEn: 'We missed our flight.', level: 2, category: 'medium' },
  { id: 'medium-19', textDe: 'Die Aussicht von hier oben ist fantastisch.', textEn: 'The view from up here is fantastic.', level: 3, category: 'medium' },
  { id: 'medium-20', textDe: 'Ich empfehle das Restaurant um die Ecke.', textEn: 'I recommend the restaurant around the corner.', level: 3, category: 'medium' },
  
  // Technology
  { id: 'medium-21', textDe: 'Mein Computer ist wieder abgesturzt.', textEn: 'My computer crashed again.', level: 2, category: 'medium' },
  { id: 'medium-22', textDe: 'Hast du das Update schon installiert?', textEn: 'Have you installed the update yet?', level: 2, category: 'medium' },
  { id: 'medium-23', textDe: 'Das WLAN funktioniert nicht richtig.', textEn: 'The WiFi is not working properly.', level: 2, category: 'medium' },
  { id: 'medium-24', textDe: 'Ich muss mein Passwort zurücksetzen.', textEn: 'I need to reset my password.', level: 2, category: 'medium' },
  { id: 'medium-25', textDe: 'Die App ist sehr benutzerfreundlich.', textEn: 'The app is very user-friendly.', level: 3, category: 'medium' },
];

/**
 * ============================================================================
 * COMPLEX TEXTS - Level 4-5 (Advanced)
 * Longer paragraphs, technical texts, quotes
 * ============================================================================
 */
export const COMPLEX_TEXTS: PracticeText[] = [
  // Famous quotes
  { 
    id: 'complex-01', 
    textDe: 'Der einzige Weg, großartige Arbeit zu leisten, ist zu lieben, was man tut.',
    textEn: 'The only way to do great work is to love what you do.',
    level: 4, 
    category: 'complex',
    description: 'Steve Jobs'
  },
  { 
    id: 'complex-02', 
    textDe: 'Sei du selbst die Veränderung, die du dir wünschst für diese Welt.',
    textEn: 'Be the change you wish to see in the world.',
    level: 4, 
    category: 'complex',
    description: 'Mahatma Gandhi'
  },
  { 
    id: 'complex-03', 
    textDe: 'Das Leben ist wie Fahrrad fahren. Um das Gleichgewicht zu halten, musst du in Bewegung bleiben.',
    textEn: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    level: 4, 
    category: 'complex',
    description: 'Albert Einstein'
  },
  
  // Business/Professional
  { 
    id: 'complex-04', 
    textDe: 'Die digitale Transformation erfordert nicht nur neue Technologien, sondern auch einen grundlegenden Wandel der Unternehmenskultur.',
    textEn: 'Digital transformation requires not only new technologies but also a fundamental change in corporate culture.',
    level: 4, 
    category: 'complex'
  },
  { 
    id: 'complex-05', 
    textDe: 'Erfolgreiche Teamarbeit basiert auf klarer Kommunikation, gegenseitigem Respekt und gemeinsamen Zielen.',
    textEn: 'Successful teamwork is based on clear communication, mutual respect, and shared goals.',
    level: 4, 
    category: 'complex'
  },
  
  // Technology paragraphs
  { 
    id: 'complex-06', 
    textDe: 'Künstliche Intelligenz wird in den kommenden Jahren immer mehr Bereiche unseres Lebens beeinflussen. Von der Medizin über den Verkehr bis hin zur Bildung.',
    textEn: 'Artificial intelligence will influence more and more areas of our lives in the coming years. From medicine to transportation to education.',
    level: 4, 
    category: 'complex'
  },
  { 
    id: 'complex-07', 
    textDe: 'Cloud Computing ermöglicht Unternehmen, ihre IT-Infrastruktur flexibel zu skalieren und Kosten zu optimieren.',
    textEn: 'Cloud computing enables companies to flexibly scale their IT infrastructure and optimize costs.',
    level: 4, 
    category: 'complex'
  },
  { 
    id: 'complex-08', 
    textDe: 'Cybersicherheit ist zu einer der wichtigsten Herausforderungen für Unternehmen und Privatpersonen geworden.',
    textEn: 'Cybersecurity has become one of the most important challenges for businesses and individuals.',
    level: 4, 
    category: 'complex'
  },
  
  // Science
  { 
    id: 'complex-09', 
    textDe: 'Der Klimawandel ist eine der größten Herausforderungen unserer Zeit und erfordert sofortiges Handeln auf globaler Ebene.',
    textEn: 'Climate change is one of the greatest challenges of our time and requires immediate action on a global level.',
    level: 5, 
    category: 'complex'
  },
  { 
    id: 'complex-10', 
    textDe: 'Die menschliche DNA enthält etwa drei Milliarden Basenpaare, die unsere genetische Information kodieren.',
    textEn: 'Human DNA contains about three billion base pairs that encode our genetic information.',
    level: 5, 
    category: 'complex'
  },
  
  // Literature style
  { 
    id: 'complex-11', 
    textDe: 'In einer Welt voller Chaos und Veränderung bleibt die Fähigkeit zur Anpassung unsere größte Stärke.',
    textEn: 'In a world full of chaos and change, the ability to adapt remains our greatest strength.',
    level: 4, 
    category: 'complex'
  },
  { 
    id: 'complex-12', 
    textDe: 'Jede große Reise beginnt mit dem ersten Schritt, und jeder Meister war einmal ein Anfänger.',
    textEn: 'Every great journey begins with the first step, and every master was once a beginner.',
    level: 4, 
    category: 'complex'
  },
  
  // News style
  { 
    id: 'complex-13', 
    textDe: 'Die neuesten Forschungsergebnisse zeigen, dass regelmäßige Bewegung nicht nur die körperliche, sondern auch die geistige Gesundheit fördert.',
    textEn: 'The latest research shows that regular exercise promotes not only physical but also mental health.',
    level: 5, 
    category: 'complex'
  },
  { 
    id: 'complex-14', 
    textDe: 'Experten warnen vor den langfristigen Auswirkungen des zunehmenden Plastikverbrauchs auf unsere Ozeane und das marine Ökosystem.',
    textEn: 'Experts warn of the long-term effects of increasing plastic consumption on our oceans and marine ecosystem.',
    level: 5, 
    category: 'complex'
  },
  { 
    id: 'complex-15', 
    textDe: 'Die Weltwirtschaft steht vor beispiellosen Herausforderungen, die innovative Lösungen und internationale Zusammenarbeit erfordern.',
    textEn: 'The global economy faces unprecedented challenges that require innovative solutions and international cooperation.',
    level: 5, 
    category: 'complex'
  },
];

/**
 * ============================================================================
 * EXPERT TEXTS - Level 6 (Professional/Expert)
 * Technical documentation, legal texts, scientific writing
 * ============================================================================
 */
export const EXPERT_TEXTS: PracticeText[] = [
  // Technical documentation
  { 
    id: 'expert-01', 
    textDe: 'Die Implementierung einer Microservices-Architektur erfordert sorgfältige Planung der Service-Grenzen, der Kommunikationsprotokolle und der Datenkonsistenz über verteilte Systeme hinweg.',
    textEn: 'Implementing a microservices architecture requires careful planning of service boundaries, communication protocols, and data consistency across distributed systems.',
    level: 6, 
    category: 'expert'
  },
  { 
    id: 'expert-02', 
    textDe: 'Der Algorithmus verwendet eine Kombination aus dynamischer Programmierung und gieriger Optimierung, um die optimale Lösung in polynomieller Zeit zu finden.',
    textEn: 'The algorithm uses a combination of dynamic programming and greedy optimization to find the optimal solution in polynomial time.',
    level: 6, 
    category: 'expert'
  },
  
  // Legal/Formal
  { 
    id: 'expert-03', 
    textDe: 'Vorbehaltlich anderer vertraglicher Vereinbarungen gelten die Allgemeinen Geschäftsbedingungen in ihrer jeweils gültigen Fassung.',
    textEn: 'Subject to other contractual agreements, the General Terms and Conditions shall apply in their respective valid version.',
    level: 6, 
    category: 'expert'
  },
  { 
    id: 'expert-04', 
    textDe: 'Der Auftragnehmer haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit, es sei denn, es handelt sich um die Verletzung wesentlicher Vertragspflichten.',
    textEn: 'The contractor is liable for damages only in cases of intent and gross negligence, unless essential contractual obligations are violated.',
    level: 6, 
    category: 'expert'
  },
  
  // Scientific
  { 
    id: 'expert-05', 
    textDe: 'Die statistischen Analysen zeigen eine signifikante Korrelation zwischen den untersuchten Variablen mit einem Konfidenzintervall von 95 Prozent.',
    textEn: 'Statistical analyses show a significant correlation between the examined variables with a confidence interval of 95 percent.',
    level: 6, 
    category: 'expert'
  },
  { 
    id: 'expert-06', 
    textDe: 'Die Quantenmechanik beschreibt das Verhalten subatomarer Teilchen und führt zu Phänomenen wie der Wellen-Teilchen-Dualität und der Quantenverschränkung.',
    textEn: 'Quantum mechanics describes the behavior of subatomic particles and leads to phenomena such as wave-particle duality and quantum entanglement.',
    level: 6, 
    category: 'expert'
  },
  
  // Medical
  { 
    id: 'expert-07', 
    textDe: 'Die Diagnose erfolgte mittels Differentialdiagnostik unter Berücksichtigung der klinischen Symptomatik und der laborchemischen Befunde.',
    textEn: 'The diagnosis was made using differential diagnostics, taking into account the clinical symptoms and laboratory findings.',
    level: 6, 
    category: 'expert'
  },
  
  // Financial
  { 
    id: 'expert-08', 
    textDe: 'Die Bilanzierung von derivativen Finanzinstrumenten erfordert eine Bewertung zum beizulegenden Zeitwert unter Berücksichtigung von Markt- und Kreditrisiken.',
    textEn: 'The accounting for derivative financial instruments requires fair value measurement considering market and credit risks.',
    level: 6, 
    category: 'expert'
  },
  
  // Philosophy
  { 
    id: 'expert-09', 
    textDe: 'Der kategorische Imperativ fordert, nur nach derjenigen Maxime zu handeln, durch die man zugleich wollen kann, dass sie ein allgemeines Gesetz werde.',
    textEn: 'The categorical imperative demands to act only according to that maxim whereby you can at the same time will that it should become a universal law.',
    level: 6, 
    category: 'expert',
    description: 'Immanuel Kant'
  },
  { 
    id: 'expert-10', 
    textDe: 'Die phänomenologische Analyse zielt darauf ab, die Strukturen des Bewusstseins und die Art und Weise zu untersuchen, wie Dinge in unserer Erfahrung erscheinen.',
    textEn: 'Phenomenological analysis aims to examine the structures of consciousness and the ways in which things appear in our experience.',
    level: 6, 
    category: 'expert'
  },
];

/**
 * ============================================================================
 * THEMATIC TEXTS - COOKING / KOCHEN
 * ============================================================================
 */
export const COOKING_TEXTS: PracticeText[] = [
  // Simple - Level 1-2
  { id: 'cook-01', textDe: 'Das Wasser kocht.', textEn: 'The water is boiling.', level: 1, category: 'simple', description: 'Cooking' },
  { id: 'cook-02', textDe: 'Schneide die Zwiebeln.', textEn: 'Cut the onions.', level: 1, category: 'simple', description: 'Cooking' },
  { id: 'cook-03', textDe: 'Rühre die Suppe um.', textEn: 'Stir the soup.', level: 1, category: 'simple', description: 'Cooking' },
  { id: 'cook-04', textDe: 'Das Essen ist fertig.', textEn: 'The food is ready.', level: 1, category: 'simple', description: 'Cooking' },
  { id: 'cook-05', textDe: 'Ich koche gerne Pasta.', textEn: 'I like cooking pasta.', level: 2, category: 'simple', description: 'Cooking' },
  
  // Medium - Level 2-3
  { id: 'cook-06', textDe: 'Das Rezept ist einfach zu folgen.', textEn: 'The recipe is easy to follow.', level: 2, category: 'medium', description: 'Cooking' },
  { id: 'cook-07', textDe: 'Heize den Ofen auf 180 Grad vor.', textEn: 'Preheat the oven to 180 degrees.', level: 2, category: 'medium', description: 'Cooking' },
  { id: 'cook-08', textDe: 'Würze das Fleisch mit Salz und Pfeffer.', textEn: 'Season the meat with salt and pepper.', level: 2, category: 'medium', description: 'Cooking' },
  { id: 'cook-09', textDe: 'Die Sauce muss noch 10 Minuten köcheln.', textEn: 'The sauce needs to simmer for 10 more minutes.', level: 3, category: 'medium', description: 'Cooking' },
  { id: 'cook-10', textDe: 'Frische Kräuter geben dem Gericht mehr Geschmack.', textEn: 'Fresh herbs give the dish more flavor.', level: 3, category: 'medium', description: 'Cooking' },
  
  // Complex - Level 4-5
  { id: 'cook-11', textDe: 'Die Kunst des Kochens liegt im perfekten Timing und der Balance der Aromen.', textEn: 'The art of cooking lies in perfect timing and the balance of flavors.', level: 4, category: 'complex', description: 'Cooking' },
  { id: 'cook-12', textDe: 'Ein gutes Messer ist das wichtigste Werkzeug in jeder Küche.', textEn: 'A good knife is the most important tool in any kitchen.', level: 4, category: 'complex', description: 'Cooking' },
  { id: 'cook-13', textDe: 'Beim Brotbacken ist die Gärzeit entscheidend für die Konsistenz.', textEn: 'When baking bread, the proofing time is crucial for the consistency.', level: 4, category: 'complex', description: 'Cooking' },
  { id: 'cook-14', textDe: 'Die mediterrane Küche verwendet viel Olivenöl, Knoblauch und frische Tomaten.', textEn: 'Mediterranean cuisine uses a lot of olive oil, garlic, and fresh tomatoes.', level: 4, category: 'complex', description: 'Cooking' },
  { id: 'cook-15', textDe: 'Sous-vide-Garen ermöglicht eine präzise Temperaturkontrolle für perfekte Ergebnisse.', textEn: 'Sous-vide cooking allows precise temperature control for perfect results.', level: 5, category: 'complex', description: 'Cooking' },
];

/**
 * ============================================================================
 * THEMATIC TEXTS - SPORTS / SPORT
 * ============================================================================
 */
export const SPORTS_TEXTS: PracticeText[] = [
  // Simple - Level 1-2
  { id: 'sport-01', textDe: 'Ich laufe jeden Tag.', textEn: 'I run every day.', level: 1, category: 'simple', description: 'Sports' },
  { id: 'sport-02', textDe: 'Der Ball ist rund.', textEn: 'The ball is round.', level: 1, category: 'simple', description: 'Sports' },
  { id: 'sport-03', textDe: 'Das Spiel beginnt um 15 Uhr.', textEn: 'The game starts at 3 PM.', level: 2, category: 'simple', description: 'Sports' },
  { id: 'sport-04', textDe: 'Schwimmen ist sehr gesund.', textEn: 'Swimming is very healthy.', level: 2, category: 'simple', description: 'Sports' },
  { id: 'sport-05', textDe: 'Mein Lieblingssport ist Tennis.', textEn: 'My favorite sport is tennis.', level: 2, category: 'simple', description: 'Sports' },
  
  // Medium - Level 2-3
  { id: 'sport-06', textDe: 'Das Training beginnt pünktlich um acht Uhr morgens.', textEn: 'Training starts promptly at eight in the morning.', level: 2, category: 'medium', description: 'Sports' },
  { id: 'sport-07', textDe: 'Der Schiedsrichter pfeift das Spiel ab.', textEn: 'The referee blows the whistle to end the game.', level: 3, category: 'medium', description: 'Sports' },
  { id: 'sport-08', textDe: 'Dehnen vor dem Sport verhindert Verletzungen.', textEn: 'Stretching before sports prevents injuries.', level: 3, category: 'medium', description: 'Sports' },
  { id: 'sport-09', textDe: 'Die Mannschaft hat das Finale erreicht.', textEn: 'The team has reached the final.', level: 3, category: 'medium', description: 'Sports' },
  { id: 'sport-10', textDe: 'Ausdauertraining verbessert die Kondition.', textEn: 'Endurance training improves fitness.', level: 3, category: 'medium', description: 'Sports' },
  
  // Complex - Level 4-5
  { id: 'sport-11', textDe: 'Profisportler trainieren mehrere Stunden täglich, um auf höchstem Niveau zu spielen.', textEn: 'Professional athletes train several hours daily to compete at the highest level.', level: 4, category: 'complex', description: 'Sports' },
  { id: 'sport-12', textDe: 'Die olympischen Spiele vereinen Athleten aus aller Welt im friedlichen Wettbewerb.', textEn: 'The Olympic Games unite athletes from around the world in peaceful competition.', level: 4, category: 'complex', description: 'Sports' },
  { id: 'sport-13', textDe: 'Regeneration und Erholung sind genauso wichtig wie das Training selbst.', textEn: 'Recovery and rest are just as important as the training itself.', level: 4, category: 'complex', description: 'Sports' },
  { id: 'sport-14', textDe: 'Intervaltraining wechselt zwischen hoher und niedriger Intensität für optimale Ergebnisse.', textEn: 'Interval training alternates between high and low intensity for optimal results.', level: 5, category: 'complex', description: 'Sports' },
  { id: 'sport-15', textDe: 'Die mentale Stärke eines Athleten ist oft entscheidender als die körperliche Fitness.', textEn: 'An athlete\'s mental strength is often more decisive than physical fitness.', level: 5, category: 'complex', description: 'Sports' },
];

/**
 * ============================================================================
 * THEMATIC TEXTS - NATURE / NATUR
 * ============================================================================
 */
export const NATURE_TEXTS: PracticeText[] = [
  // Simple - Level 1-2
  { id: 'nature-01', textDe: 'Die Sonne scheint.', textEn: 'The sun is shining.', level: 1, category: 'simple', description: 'Nature' },
  { id: 'nature-02', textDe: 'Der Baum ist groß.', textEn: 'The tree is tall.', level: 1, category: 'simple', description: 'Nature' },
  { id: 'nature-03', textDe: 'Die Blumen blühen.', textEn: 'The flowers are blooming.', level: 1, category: 'simple', description: 'Nature' },
  { id: 'nature-04', textDe: 'Der Fluss fließt ins Meer.', textEn: 'The river flows into the sea.', level: 2, category: 'simple', description: 'Nature' },
  { id: 'nature-05', textDe: 'Die Vögel singen morgens.', textEn: 'The birds sing in the morning.', level: 2, category: 'simple', description: 'Nature' },
  
  // Medium - Level 2-3
  { id: 'nature-06', textDe: 'Der Wald ist voller Leben und Geräusche.', textEn: 'The forest is full of life and sounds.', level: 2, category: 'medium', description: 'Nature' },
  { id: 'nature-07', textDe: 'Nach dem Regen erscheint ein Regenbogen am Himmel.', textEn: 'After the rain, a rainbow appears in the sky.', level: 3, category: 'medium', description: 'Nature' },
  { id: 'nature-08', textDe: 'Die Berge sind im Winter mit Schnee bedeckt.', textEn: 'The mountains are covered with snow in winter.', level: 3, category: 'medium', description: 'Nature' },
  { id: 'nature-09', textDe: 'Schmetterlinge flattern von Blume zu Blume.', textEn: 'Butterflies flutter from flower to flower.', level: 3, category: 'medium', description: 'Nature' },
  { id: 'nature-10', textDe: 'Der Sonnenuntergang malt den Himmel in Orange und Rosa.', textEn: 'The sunset paints the sky in orange and pink.', level: 3, category: 'medium', description: 'Nature' },
  
  // Complex - Level 4-5
  { id: 'nature-11', textDe: 'Das Ökosystem des Regenwaldes beherbergt Millionen verschiedener Pflanzen- und Tierarten.', textEn: 'The rainforest ecosystem is home to millions of different plant and animal species.', level: 4, category: 'complex', description: 'Nature' },
  { id: 'nature-12', textDe: 'Zugvögel legen jedes Jahr Tausende von Kilometern zurück, um wärmere Gebiete zu erreichen.', textEn: 'Migratory birds travel thousands of kilometers each year to reach warmer regions.', level: 4, category: 'complex', description: 'Nature' },
  { id: 'nature-13', textDe: 'Die Artenvielfalt ist entscheidend für die Stabilität und Gesundheit unseres Planeten.', textEn: 'Biodiversity is crucial for the stability and health of our planet.', level: 4, category: 'complex', description: 'Nature' },
  { id: 'nature-14', textDe: 'Photosynthese ermöglicht Pflanzen, Sonnenlicht in Energie umzuwandeln und Sauerstoff zu produzieren.', textEn: 'Photosynthesis allows plants to convert sunlight into energy and produce oxygen.', level: 5, category: 'complex', description: 'Nature' },
  { id: 'nature-15', textDe: 'Die Korallenriffe sind durch steigende Wassertemperaturen und Versauerung der Ozeane bedroht.', textEn: 'Coral reefs are threatened by rising water temperatures and ocean acidification.', level: 5, category: 'complex', description: 'Nature' },
];

/**
 * ============================================================================
 * THEMATIC TEXTS - MUSIC / MUSIK
 * ============================================================================
 */
export const MUSIC_TEXTS: PracticeText[] = [
  // Simple - Level 1-2
  { id: 'music-01', textDe: 'Ich höre gerne Musik.', textEn: 'I like listening to music.', level: 1, category: 'simple', description: 'Music' },
  { id: 'music-02', textDe: 'Das Lied ist schön.', textEn: 'The song is beautiful.', level: 1, category: 'simple', description: 'Music' },
  { id: 'music-03', textDe: 'Sie spielt Klavier.', textEn: 'She plays piano.', level: 1, category: 'simple', description: 'Music' },
  { id: 'music-04', textDe: 'Die Band gibt ein Konzert.', textEn: 'The band is giving a concert.', level: 2, category: 'simple', description: 'Music' },
  { id: 'music-05', textDe: 'Mein Lieblingsinstrument ist die Gitarre.', textEn: 'My favorite instrument is the guitar.', level: 2, category: 'simple', description: 'Music' },
  
  // Medium - Level 2-3
  { id: 'music-06', textDe: 'Der Rhythmus bringt alle zum Tanzen.', textEn: 'The rhythm makes everyone dance.', level: 2, category: 'medium', description: 'Music' },
  { id: 'music-07', textDe: 'Das Orchester probt für das große Konzert.', textEn: 'The orchestra rehearses for the big concert.', level: 3, category: 'medium', description: 'Music' },
  { id: 'music-08', textDe: 'Die Melodie geht mir nicht mehr aus dem Kopf.', textEn: 'I can\'t get the melody out of my head.', level: 3, category: 'medium', description: 'Music' },
  { id: 'music-09', textDe: 'Jazz verbindet Improvisation mit komplexen Harmonien.', textEn: 'Jazz combines improvisation with complex harmonies.', level: 3, category: 'medium', description: 'Music' },
  { id: 'music-10', textDe: 'Musikunterricht fördert die kognitive Entwicklung von Kindern.', textEn: 'Music lessons promote the cognitive development of children.', level: 3, category: 'medium', description: 'Music' },
  
  // Complex - Level 4-5
  { id: 'music-11', textDe: 'Beethoven komponierte seine größten Werke, obwohl er am Ende seines Lebens taub war.', textEn: 'Beethoven composed his greatest works even though he was deaf at the end of his life.', level: 4, category: 'complex', description: 'Music' },
  { id: 'music-12', textDe: 'Die Entwicklung der elektronischen Musik hat die Klanglandschaft der modernen Welt revolutioniert.', textEn: 'The development of electronic music has revolutionized the soundscape of the modern world.', level: 4, category: 'complex', description: 'Music' },
  { id: 'music-13', textDe: 'Musik hat die einzigartige Fähigkeit, Emotionen auszudrücken, die Worte nicht erfassen können.', textEn: 'Music has the unique ability to express emotions that words cannot capture.', level: 4, category: 'complex', description: 'Music' },
  { id: 'music-14', textDe: 'Die Akustik eines Konzertsaals beeinflusst maßgeblich die Qualität des Klangerlebnisses.', textEn: 'The acoustics of a concert hall significantly influence the quality of the sound experience.', level: 5, category: 'complex', description: 'Music' },
  { id: 'music-15', textDe: 'Musiktherapie wird erfolgreich bei der Behandlung von Depressionen und Angstzuständen eingesetzt.', textEn: 'Music therapy is successfully used in the treatment of depression and anxiety disorders.', level: 5, category: 'complex', description: 'Music' },
];

/**
 * ============================================================================
 * THEMATIC TEXTS - TECHNOLOGY / TECHNOLOGIE
 * ============================================================================
 */
export const TECHNOLOGY_TEXTS: PracticeText[] = [
  // Simple - Level 1-2
  { id: 'tech-01', textDe: 'Der Computer ist an.', textEn: 'The computer is on.', level: 1, category: 'simple', description: 'Technology' },
  { id: 'tech-02', textDe: 'Ich schreibe eine E-Mail.', textEn: 'I am writing an email.', level: 1, category: 'simple', description: 'Technology' },
  { id: 'tech-03', textDe: 'Das Internet ist sehr schnell.', textEn: 'The internet is very fast.', level: 2, category: 'simple', description: 'Technology' },
  { id: 'tech-04', textDe: 'Mein Handy braucht ein Update.', textEn: 'My phone needs an update.', level: 2, category: 'simple', description: 'Technology' },
  { id: 'tech-05', textDe: 'Die App funktioniert nicht.', textEn: 'The app is not working.', level: 2, category: 'simple', description: 'Technology' },
  
  // Medium - Level 2-3
  { id: 'tech-06', textDe: 'Cloud-Speicher ermöglicht den Zugriff von überall.', textEn: 'Cloud storage enables access from anywhere.', level: 2, category: 'medium', description: 'Technology' },
  { id: 'tech-07', textDe: 'Software-Updates beheben Sicherheitslücken.', textEn: 'Software updates fix security vulnerabilities.', level: 3, category: 'medium', description: 'Technology' },
  { id: 'tech-08', textDe: 'Streaming-Dienste haben die Unterhaltungsbranche verändert.', textEn: 'Streaming services have changed the entertainment industry.', level: 3, category: 'medium', description: 'Technology' },
  { id: 'tech-09', textDe: 'Smarte Geräte kommunizieren über das Internet der Dinge.', textEn: 'Smart devices communicate via the Internet of Things.', level: 3, category: 'medium', description: 'Technology' },
  { id: 'tech-10', textDe: 'Datenschutz ist im digitalen Zeitalter besonders wichtig.', textEn: 'Data protection is especially important in the digital age.', level: 3, category: 'medium', description: 'Technology' },
  
  // Complex - Level 4-5
  { id: 'tech-11', textDe: 'Künstliche Intelligenz und maschinelles Lernen transformieren zahlreiche Industrien grundlegend.', textEn: 'Artificial intelligence and machine learning are fundamentally transforming numerous industries.', level: 4, category: 'complex', description: 'Technology' },
  { id: 'tech-12', textDe: 'Blockchain-Technologie ermöglicht sichere und transparente dezentrale Transaktionen.', textEn: 'Blockchain technology enables secure and transparent decentralized transactions.', level: 4, category: 'complex', description: 'Technology' },
  { id: 'tech-13', textDe: 'Quantencomputer versprechen Rechenleistungen, die herkömmliche Computer bei weitem übertreffen.', textEn: 'Quantum computers promise computing power that far exceeds conventional computers.', level: 5, category: 'complex', description: 'Technology' },
  { id: 'tech-14', textDe: 'Die Entwicklung von 5G-Netzwerken wird neue Möglichkeiten für autonomes Fahren und Telemedizin schaffen.', textEn: 'The development of 5G networks will create new possibilities for autonomous driving and telemedicine.', level: 5, category: 'complex', description: 'Technology' },
  { id: 'tech-15', textDe: 'Augmented Reality und Virtual Reality werden die Art, wie wir mit digitalen Inhalten interagieren, revolutionieren.', textEn: 'Augmented reality and virtual reality will revolutionize the way we interact with digital content.', level: 5, category: 'complex', description: 'Technology' },
];

/**
 * ============================================================================
 * THEMATIC TEXTS - HEALTH / GESUNDHEIT
 * ============================================================================
 */
export const HEALTH_TEXTS: PracticeText[] = [
  // Simple - Level 1-2
  { id: 'health-01', textDe: 'Ich bin gesund.', textEn: 'I am healthy.', level: 1, category: 'simple', description: 'Health' },
  { id: 'health-02', textDe: 'Trink viel Wasser.', textEn: 'Drink lots of water.', level: 1, category: 'simple', description: 'Health' },
  { id: 'health-03', textDe: 'Schlaf ist wichtig.', textEn: 'Sleep is important.', level: 1, category: 'simple', description: 'Health' },
  { id: 'health-04', textDe: 'Obst ist sehr gesund.', textEn: 'Fruit is very healthy.', level: 2, category: 'simple', description: 'Health' },
  { id: 'health-05', textDe: 'Ich mache jeden Tag Sport.', textEn: 'I exercise every day.', level: 2, category: 'simple', description: 'Health' },
  
  // Medium - Level 2-3
  { id: 'health-06', textDe: 'Eine ausgewogene Ernährung ist der Schlüssel zur Gesundheit.', textEn: 'A balanced diet is the key to health.', level: 2, category: 'medium', description: 'Health' },
  { id: 'health-07', textDe: 'Regelmäßige Vorsorgeuntersuchungen sind sehr wichtig.', textEn: 'Regular preventive checkups are very important.', level: 3, category: 'medium', description: 'Health' },
  { id: 'health-08', textDe: 'Stress kann sich negativ auf die Gesundheit auswirken.', textEn: 'Stress can have a negative impact on health.', level: 3, category: 'medium', description: 'Health' },
  { id: 'health-09', textDe: 'Meditation hilft bei der Entspannung und reduziert Stress.', textEn: 'Meditation helps with relaxation and reduces stress.', level: 3, category: 'medium', description: 'Health' },
  { id: 'health-10', textDe: 'Impfungen schützen vor gefährlichen Krankheiten.', textEn: 'Vaccinations protect against dangerous diseases.', level: 3, category: 'medium', description: 'Health' },
  
  // Complex - Level 4-5
  { id: 'health-11', textDe: 'Das Immunsystem ist ein komplexes Netzwerk aus Zellen, Geweben und Organen, das den Körper vor Infektionen schützt.', textEn: 'The immune system is a complex network of cells, tissues, and organs that protects the body from infections.', level: 4, category: 'complex', description: 'Health' },
  { id: 'health-12', textDe: 'Mentale Gesundheit ist genauso wichtig wie körperliche Gesundheit und verdient die gleiche Aufmerksamkeit.', textEn: 'Mental health is just as important as physical health and deserves the same attention.', level: 4, category: 'complex', description: 'Health' },
  { id: 'health-13', textDe: 'Chronische Erkrankungen erfordern oft eine langfristige Behandlung und Änderungen des Lebensstils.', textEn: 'Chronic diseases often require long-term treatment and lifestyle changes.', level: 4, category: 'complex', description: 'Health' },
  { id: 'health-14', textDe: 'Die Darm-Hirn-Achse zeigt, wie eng Verdauungsgesundheit und psychisches Wohlbefinden verbunden sind.', textEn: 'The gut-brain axis shows how closely digestive health and mental well-being are connected.', level: 5, category: 'complex', description: 'Health' },
  { id: 'health-15', textDe: 'Präventive Medizin konzentriert sich auf die Verhinderung von Krankheiten statt auf deren Behandlung.', textEn: 'Preventive medicine focuses on preventing diseases rather than treating them.', level: 5, category: 'complex', description: 'Health' },
];

/**
 * ============================================================================
 * COMBINED EXPORTS
 * ============================================================================
 */

export const ALL_PRACTICE_TEXTS: PracticeText[] = [
  ...MICRO_EXERCISES,
  ...SIMPLE_TEXTS,
  ...MEDIUM_TEXTS,
  ...COMPLEX_TEXTS,
  ...EXPERT_TEXTS,
  ...COOKING_TEXTS,
  ...SPORTS_TEXTS,
  ...NATURE_TEXTS,
  ...MUSIC_TEXTS,
  ...TECHNOLOGY_TEXTS,
  ...HEALTH_TEXTS,
];

/**
 * Thematic text collections
 */
export const THEMATIC_TEXTS = {
  cooking: COOKING_TEXTS,
  sports: SPORTS_TEXTS,
  nature: NATURE_TEXTS,
  music: MUSIC_TEXTS,
  technology: TECHNOLOGY_TEXTS,
  health: HEALTH_TEXTS,
};

/**
 * Get thematic texts by topic
 */
export function getThematicTexts(topic: keyof typeof THEMATIC_TEXTS): PracticeText[] {
  return THEMATIC_TEXTS[topic] || [];
}

/**
 * Get all thematic texts
 */
export function getAllThematicTexts(): PracticeText[] {
  return [
    ...COOKING_TEXTS,
    ...SPORTS_TEXTS,
    ...NATURE_TEXTS,
    ...MUSIC_TEXTS,
    ...TECHNOLOGY_TEXTS,
    ...HEALTH_TEXTS,
  ];
}

/**
 * Get practice texts by category
 */
export function getPracticeTextsByCategory(category: PracticeText['category']): PracticeText[] {
  return ALL_PRACTICE_TEXTS.filter(text => text.category === category);
}

/**
 * Get practice texts by level
 */
export function getPracticeTextsByLevel(level: number): PracticeText[] {
  return ALL_PRACTICE_TEXTS.filter(text => text.level === level);
}

/**
 * Get practice texts by level range
 */
export function getPracticeTextsByLevelRange(minLevel: number, maxLevel: number): PracticeText[] {
  return ALL_PRACTICE_TEXTS.filter(text => text.level >= minLevel && text.level <= maxLevel);
}

/**
 * Get random practice text
 */
export function getRandomPracticeText(category?: PracticeText['category'], level?: number): PracticeText {
  let filtered = ALL_PRACTICE_TEXTS;
  
  if (category) {
    filtered = filtered.filter(text => text.category === category);
  }
  if (level) {
    filtered = filtered.filter(text => text.level === level);
  }
  
  return filtered[Math.floor(Math.random() * filtered.length)];
}

/**
 * Get text in specific language
 */
export function getTextInLanguage(text: PracticeText, language: 'de' | 'en'): string {
  return language === 'de' ? text.textDe : text.textEn;
}

/**
 * Statistics
 */
export function getPracticeTextStats(): {
  total: number;
  byCategory: Record<string, number>;
  byLevel: Record<number, number>;
} {
  const stats = {
    total: ALL_PRACTICE_TEXTS.length,
    byCategory: {} as Record<string, number>,
    byLevel: {} as Record<number, number>,
  };

  ALL_PRACTICE_TEXTS.forEach(text => {
    stats.byCategory[text.category] = (stats.byCategory[text.category] || 0) + 1;
    stats.byLevel[text.level] = (stats.byLevel[text.level] || 0) + 1;
  });

  return stats;
}