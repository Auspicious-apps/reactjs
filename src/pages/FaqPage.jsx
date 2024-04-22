import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqContent from "../components/FaqContent";
import { FaQq } from "react-icons/fa";
import logoAsset from "../assets/navbar/logoAsset.svg";

const faqs = [
  {
    question: "¿Cuáles son los efectos secundarios de la psilocibina?",
    answer:
      "La psilocibina puede causar efectos secundarios como náuseas, mareos, aumento de la presión arterial, dilatación de las pupilas, ansiedad, confusión y cambios en la percepción sensorial.",
    link: "https://nida.nih.gov/research-topics/psychedelic-dissociative-drugs#drugs-safe",
  },
  {
    question: "¿Cuáles son los efectos secundarios más comunes?",
    answer:
      "Los efectos secundarios más comunes de la psilocibina suelen ser náuseas al asimilar la psilocibina, mareos y cambios en la percepción sensorial.",
    link: "https://nida.nih.gov/research-topics/psychedelic-dissociative-drugs#drugs-safe",
  },
  {
    question: "¿Existe alguna manera de evitar estos síntomas?",
    answer:
      "Existen algunas estrategias para reducir o evitar los efectos secundarios de la psilocibina, como tomarla en un entorno seguro y cómodo, con supervisión adecuada y siguiendo las indicaciones de un profesional. Históricamente se ha consumido fresco en miel o hervido con otras especies. Nosotros usamos saborizantes gourmet para contrarrestar la nausea.",
    link: "https://riucv.ucv.es/bitstream/handle/20.500.12466/2987/POTENCIAL%20TERAP%C3%89UTICO%20DE%20LA%20PSILOCIBINA%20EN%20EL%20CONTEXTO%20DE%20PSICOTERAPIA%20COMO%20TRATAMIENTO%20ANTIDEPRESIVO%20Y%20ANSIOL%C3%8DTICO-1.pdf?sequence=1&isAllowed=y",
  },
  {
    question:
      "¿Cuáles son los medicamentos o sustancias con los cuales no se recomienda mezclar la psilocibina? ",
    answer:
      " Es importante evitar el consumo de psilocibina junto con otros medicamentos que afecten el sistema nervioso central, como antidepresivos, ansiolíticos o estimulantes, ya que puede aumentar el riesgo de interacciones adversas.",
    link: "https://www.fda.gov/news-events/press-announcements/fda-approves-new-drug-treatment-resistant-depression ",
  },
  {
    question:
      "¿Cuánto tiempo duran los efectos de la toma macro y cuándo acudir al médico por los efectos causados? ",
    answer:
      "Los efectos de la psilocibina suelen durar entre 4 y 6 horas, pero pueden variar según la dosis y la sensibilidad individual. Se debe acudir al médico si se experimentan efectos adversos graves como ataques de pánico, psicosis temporal o pensamientos suicidas. Pocos casos mundiales anuales de hospitalizaciones por psilocibina son reportados. ",
    link: "https://riucv.ucv.es/bitstream/handle/20.500.12466/2987/POTENCIAL%20TERAP%C3%89UTICO%20DE%20LA%20PSILOCIBINA%20EN%20EL%20CONTEXTO%20DE%20PSICOTERAPIA%20COMO%20TRATAMIENTO%20ANTIDEPRESIVO%20Y%20ANSIOL%C3%8DTICO-1.pdf?sequence=1&isAllowed=y ",
  },
  {
    question: "¿La psilocibina genera adicción? ",
    answer:
      " No, no genera adicción. La psilocibina, al igual que otros alucinógenos clásicos, al actuar por vía serotoninérgica no es probable que genere adicción, puesto que esto está relacionado con la vía dopaminérgica, siendo por tanto considerados psicológicamente seguros. Existen estudios con modelos preclínicos de psilocibina y LSD que han mostrado ausencia de dependencia física y de síntomas de abstinencia, con un muy bajo potencial de riesgo de abuso. Cabe destacar que la psilocibina tiene tolerancia cruzada con el compuesto alucinógeno LSD. Existen estudios que muestran que la psilocibina tiene un potencial de dependencia incluso inferior al de la cafeína, y que se encuentra dentro de las sustancias clasificadas como drogas de abuso, como una de las de menor riesgo de muerte. A lo que, es más, tiende a la taquifilaxia, es decir, reducción rápida del efecto de una droga al administrarse en repetidas dosis debido a ese mecanismo de acción.",
    link: "https://nida.nih.gov/research-topics/psilocybin-magic-mushrooms#is-psilocybin-addictive ",
  },
  {
    question: "¿Cuánto tiempo dura la psilocibina en el cuerpo? ",
    answer:
      "La vida media de la psilocibina con su administración vía oral de 8-25 mg es de 2.5 horas en sangre, apareciendo en plasma a los 30 minutos. El inicio de los efectos psicoactivos es a los 20-40 minutos y un efecto y concentración pico a los 60-90 minutos seguidos de unos 60 minutos de plateau para después ir descendiendo en su concentración. Los efectos desaparecen a las 6-8 horas tras su administración. Administrada vía intravenosa su semivida es de 30 minutos con una duración de sus efectos psicoactivos de 15-30 minutos.  ",
    link: "https://riucv.ucv.es/bitstream/handle/20.500.12466/2987/POTENCIAL%20TERAP%C3%89UTICO%20DE%20LA%20PSILOCIBINA%20EN%20EL%20CONTEXTO%20DE%20PSICOTERAPIA%20COMO%20TRATAMIENTO%20ANTIDEPRESIVO%20Y%20ANSIOL%C3%8DTICO-1.pdf?sequence=1&isAllowed=y ",
  },
  // ------Second FAQ
  {
    question:
      "¿Existe evidencia del uso de la psilocibina para tratar la drogadicción? ",
    answer:
      "Sí, existen estudios y evidencia científica que sugieren que la psilocibina podría ser efectiva en el tratamiento de la adicción a sustancias como el alcohol, tabaco y opiáceos. Se ha demostrado que la psilocibina puede ayudar a reducir los síntomas de abstinencia, aumentar la conciencia personal y promover cambios positivos en el comportamiento. ",
    link: "https://nida.nih.gov/es/areas-de-investigacion/la-psilocibina-setas-u-hongos-magicos#psilocibina-medicamento ",
  },
  {
    question: "¿La psilocibina puede ser un tratamiento contra el alcoholismo?",
    answer:
      "Si, el uso de la psilocibina promete ser un buen tratamiento contra el alcoholismo. En  un estudio prueba de concepto sin grupo control con 10 pacientes dependientes al alcohol, se observó una reducción estadísticamente significativa en el consumo (de 42% de días en los que se bebía algo de alcohol, a 16 % a las 36 semanas de media) tras una sesión con psilocibina. Cabe mencionar que la intervención psicoterapéutica de las 4 semanas previas a la sesión no había logrado una reducción significativa. También se ha constatado en una encuesta online a 343 individuos autodefinidos como dependientes al alcohol - 72% con criterios retrospectivos de trastorno grave por consumo de alcohol- que el 83% se mantenían abstemios tras el consumo de LSD o psilocibina (36%) en entornos no clínicos. ",
    link: "https://pubmed.ncbi.nlm.nih.gov/25586396/ ",
  },
  {
    question: "La psilocibina puede ser un tratamiento contra el tabaquismo?",
    answer:
      " Si, esto debido a que se tiene evidencia de que en un estudio piloto abierto realizado a 15 pacientes para dejar de fumar con una media de 6 intentos de abandono tabáquico (19 cigarrillos/día de media), se les trató con 3 sesiones de psilocibina a dosis moderadas y altas en el contexto de un transcurso de 15 semanas. A los seis meses 12 pacientes seguían sin fumar. Al año seguían sin recaer 9 de los 11 pacientes que pudieron ser contactados. ",
    link: "https://pubmed.ncbi.nlm.nih.gov/25563443/",
  },
  {
    question:
      "¿A partir de cuánto tiempo se muestran las mejoras con su tratamiento? ",
    answer:
      "Los estudios clínicos han demostrado que las mejoras en el tratamiento de las adicciones tras el uso de psilocibina pueden comenzar a notarse después de una sola sesión de terapia asistida con esta sustancia psicodélica. Sin embargo, es importante tener en cuenta que el proceso de recuperación puede variar según cada individuo y la gravedad de su adicción. ",
    link: "https://riucv.ucv.es/bitstream/handle/20.500.12466/2987/POTENCIAL%20TERAP%C3%89UTICO%20DE%20LA%20PSILOCIBINA%20EN%20EL%20CONTEXTO%20DE%20PSICOTERAPIA%20COMO%20TRATAMIENTO%20ANTIDEPRESIVO%20Y%20ANSIOL%C3%8DTICO-1.pdf?sequence=1&isAllowed=y",
  },
  {
    question: "¿Hay posibilidad de recaer después de empezar el tratamiento? ",
    answer:
      "Como con cualquier tratamiento para la adicción, existe la posibilidad de recaída incluso después de haber experimentado mejoras significativas con el uso de psilocibina, para ello es fundamental seguir un plan integral de tratamiento que incluya terapias adicionales, apoyo continuo y seguimiento médico para reducir las posibilidades de recaída y mantener los beneficios obtenidos durante el tratamiento con psilocibina. ",
    link: "https://nida.nih.gov/es/areas-de-investigacion/la-psilocibina-setas-u-hongos-magicos#psilocibina-medicamento ",
  },
  // ---Third FAQ
  {
    question:
      "¿Se pueden encontrar mejoras en el tratamiento de PTSD solo con psilocibina y por qué? ",
    answer:
      "Si, la psilocibina se considera prometedora en el tratamiento del Trastorno de Estrés Postraumático (PTSD) debido a sus efectos psicodélicos que pueden ayudar a procesar traumas pasados, su capacidad para promover la neuroplasticidad y reducir la actividad cerebral hiperactiva, así como su capacidad para aumentar la empatía y la conexión emocional. Quienes padecen del trastorno por estrés postraumático suelen asociar un sonido o incluso objeto con la sensación de miedo, pero con la utilización de psilocibina, se podría lograr el borrar ese recuerdo negativo y, por ende, las respuestas relacionadas a una memoria traumática. ",
  },
  {
    question:
      "¿Existe evidencia que respalde los beneficios del uso de psilocibina en el tratamiento de PTSD? ",
    answer:
      "Hay estudios y evidencias que respaldan los beneficios del uso de psilocibina en el tratamiento del Trastorno de Estrés Postraumático (PTSD), mostrando que puede reducir los síntomas, mejorar la calidad de vida y promover cambios positivos en el bienestar emocional de los pacientes. Un estudio del 2022 realizado en veteranos del ejército que sufren de estrés postraumático demostró que la totalidad de los participantes que usaron psilocibina mostró mejoras inmediatas y a largo plazo de los síntomas. Veteranos han confirmado el poder de curación que tiene el uso de psilocibina para el trastorno de estrés postraumático. Según un informe publicado por Insider, Kruske (un veterano de guerra) no registró mejoras (o muy pocas) cuando se automedicaba con sustancias y alcohol. Sin embargo, su salud mental mejoró después de su primer viaje con hongos mágicos en el 2019. ",
    link: " https://ichgcp.net/es/clinical-trials-registry/NCT05562973 ",
  },
  {
    question: "¿Por qué se recomienda la psilocibina para la depresión? ",
    answer:
      "La psilocibina se ha investigado como tratamiento para la depresión. Con solo dos dosis puede haber una mejoría o incluso una remisión en algunas personas durante semanas. El efecto es tan poderoso que recientemente la Administración de Servicios de Salud Mental y Abuso de Sustancias (SAMHSA) del gobierno de EE. UU. sugiere que la psilocibina podría obtener la aprobación de la FDA para tratar la depresión ya en 2024. Además de que  debido a su capacidad para influir en los receptores de serotonina en el cerebro, puede ayudar a aliviar los síntomas depresivos, promoviendo así, cambios positivos en la percepción y el estado de ánimo, reducir la rumiación y tener efectos terapéuticos duraderos. Estudios donde se ha administrado psilocibina a pacientes, revelan que los pensamientos y planes suicidas en el último año fueron menores en el grupo de psilocibina en comparación con el grupo de psilocibina y otros psicodélicos. Finalmente, las probabilidades de sufrir angustia psicológica durante el último mes fueron menores en el grupo de psilocibina en comparación con el otro grupo de psicodélicos únicamente. Según estos datos, el grupo de psilocibina pareció obtener mejores resultados que cualquier otro grupo.",
    link: "https://riucv.ucv.es/bitstream/handle/20.500.12466/2987/POTENCIAL%20TERAP%C3%89UTICO%20DE%20LA%20PSILOCIBINA%20EN%20EL%20CONTEXTO%20DE%20PSICOTERAPIA%20COMO%20TRATAMIENTO%20ANTIDEPRESIVO%20Y%20ANSIOL%C3%8DTICO-1.pdf?sequence=1&isAllowed=y ",
  },
  {
    question:
      "¿Cuáles son los beneficios que genera en pacientes con depresión? ",
    answer:
      "La psilocibina puede generar beneficios en pacientes con depresión, como la reducción de los síntomas depresivos, mejora del estado de ánimo, aumento de la autoaceptación y autoestima, cambios positivos en la perspectiva y percepción, disminución de la rumiación y pensamientos negativos recurrentes. ",
    link: " https://riucv.ucv.es/bitstream/handle/20.500.12466/2987/POTENCIAL%20TERAP%C3%89UTICO%20DE%20LA%20PSILOCIBINA%20EN%20EL%20CONTEXTO%20DE%20PSICOTERAPIA%20COMO%20TRATAMIENTO%20ANTIDEPRESIVO%20Y%20ANSIOL%C3%8DTICO-1.pdf?sequence=1&isAllowed=y ",
  },
  {
    question: "¿Se puede combinar con antidepresivos? ",
    answer:
      "La combinación de psilocibina con antidepresivos puede ser peligrosa y no se recomienda debido al riesgo de interacciones adversas y efectos secundarios graves. La mayoría de los antidepresivos como la sertralina y fluoxetina y la duloxetina, funcionan principalmente aumentando los niveles de serotonina en el cerebro. La psilocibina actúa de manera similar, uniéndose a algunos de los mismos receptores de serotonina. Eso conduce a una tolerancia cruzada: las personas que toman antidepresivos pueden experimentar sólo efectos psicodélicos menores de la psilocibina. Además, la combinación de dos agentes serotoninérgicos puede provocar el síndrome serotoninérgico, que en casos graves puede resultar mortal.",
    link: "https://mind-foundation.org/interacciones-entre-psicodelicos-y-antidepresivos/?lang=es ",
  },
  {
    question:
      "¿Cuánto tiempo hay que esperar para evitar que entre en contacto con medicación para la depresión?  ",
    answer:
      "Se recomienda esperar al menos dos semanas después de suspender la medicación para la depresión antes de iniciar un tratamiento con psilocibina. Esto se debe a que algunos antidepresivos pueden tener interacciones peligrosas con la psilocibina, lo que podría aumentar el riesgo de efectos secundarios graves.  ",
    link: "https://www.theguardian.com/science/2016/may/17/magic-mushrooms-lift-severe-depression-in-clinical-trial ",
  },
  {
    question: "¿La psilocibina puede ser un tratamiento contra el TOC? ",
    answer:
      "El uso de la psilocibina como tratamiento para el trastorno obsesivo compulsivo parece prometedor. En un estudio reciente, la administración de la psilocibina en sujetos con Trastorno Obsesivo Compulsivo resultó en una reducción de sintomatología TOC (reducción en puntaje YBOCS) después de 1 o más sesiones, por un tiempo mayor a la vida farmacológica de la sustancia (24 h después la reducción de síntomas continuó siendo significativa). Sorpresivamente, el tamaño de la dosis administrada no influyó sobre la sintomatología, lo cual especulan los autores, pueda ser consecuencia de variables extra farmacológicas, las cuales interactúan con los efectos de la sustancia. Un informe de caso publicado en 2014 describe a un hombre de 38 años que tuvo múltiples fallos de medicación en el tratamiento de su TOC. Consumió setas mágicas que le dio un amigo e inmediatamente tuvo un aumento de ansiedad, pero notó que sus pensamientos intrusivos se redujeron significativamente al día siguiente. Determinó que cada vez que ingiere aproximadamente 2 g de hongos de psilocibina, sus síntomas de TOC se reducirían durante las siguientes 3 semanas. Se ha realizado un estudio piloto con 9 pacientes en dosis escaladas (0,1-0,2-0,3 mg/kg) en el que se observó remisión sintomática de entre un 23 y un 100%, todos más allá de las 24 horas. Sin embargo, solo un paciente alcanzó remisión a los seis meses. ",
    link: "https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0717-92272014000200005 ",
  },
  {
    question:
      "¿Por qué el uso de la psilocibina es bueno para el síndrome premenstrual? ",
    answer:
      "Debido a que la psilocibina se une a los receptores de serotonina en el cerebro. Esto hace que el cerebro piense que hay más cantidad de este neurotransmisor de la que realmente hay. La psilocibina cumple la misma función que la serotonina en este sentido. Las mujeres que normalmente padecen el síndrome premenstrual descubren que duermen mejor, tienen más energía y se sienten menos deprimidas cuando se microdosifican. Además, la psilocibina hace que las partes del cerebro responsables de las reacciones de ansiedad se vuelvan menos activas. Esto hace que te sientas más tranquilo, no tan irritable y menos ansioso. ",
    link: "https://dutchmicrodosing.es/blog/microdosificacion-para-pms/ ",
  },
  {
    question:
      "¿Por qué elegir la microdosificación como tratamiento del síndrome premenstrual, en lugar de los ISRS (Inhibidores Selectivos de la Recaptación de Serotonina)? ",
    answer:
      "La microdosificación tiene varias ventajas. En primer lugar, se nota el efecto más rápido. La mayoría de las mujeres notan los beneficios de la microdosificación a partir de la primera semana, mientras que pueden pasar meses para saber si los ISRS ayudan con sus síntomas. También puedes dosificar de forma más flexible con la microdosificación. Puedes llevarlo siempre que lo necesites. No se puede hacer eso con los ISRS, hay que seguir tomándolos continuamente. ",
    link: "https://cyclicpower.com/sexualidadmicrodosis",
  },
  {
    question: "¿La microdosificación ayuda con los calambres menstruales? ",
    answer:
      "Si, ya que en dosis bajas, la psilocibina tiene un efecto vasoconstrictor. Esto permite que fluya menos sangre aliviando los dolores de cabeza e inhibe la inflamación. ",
    link: "https://cyclicpower.com/sexualidadmicrodosis",
  },
  {
    question:
      "¿La microdosificación genera síntomas secundarios durante el SPM? ",
    answer:
      "Puede causar una presión arterial algo más alta. Algunas mujeres sufren realmente de presión arterial baja durante el SPM. Esto, a su vez, provoca síntomas como sensación de mareo, vértigo y náuseas. Así que los efectos vasoconstrictores de la psilocibina también pueden reducir estos síntomas. ",
    link: "https://dutchmicrodosing.es/blog/microdosificacion-para-pms/ ",
  },
  {
    question: "¿La psilocibina cura o solo disminuye la jaqueca? ",
    answer:
      "La psilocibina ha mostrado cierto potencial en el tratamiento de la migraña, ya que se ha observado que puede ayudar a disminuir la frecuencia e intensidad de los episodios de dolor de cabeza en algunas personas. Sin embargo, no se considera una cura definitiva para la migraña, sino más bien una opción terapéutica alternativa que puede proporcionar alivio temporal. ",
    link: "https://pubmed.ncbi.nlm.nih.gov/37540398/ ",
  },
  {
    question:
      "¿Qué evidencia existe de los beneficios de su uso para tratar la jaqueca? ",
    answer:
      "La evidencia científica sobre los beneficios de la psilocibina en el tratamiento de la migraña es limitada pero prometedora. Algunos estudios preliminares han sugerido que la psilocibina puede reducir la frecuencia e intensidad de los dolores de cabeza en pacientes con migraña. Sin embargo, se necesitan más investigaciones y ensayos clínicos para confirmar estos hallazgos y comprender mejor los efectos terapéuticos de la psilocibina en esta condición. ",
    link: "https://pubmed.ncbi.nlm.nih.gov/37540398/ ",
  },
  {
    question:
      "¿Por qué estimula la psilocibina la neuro plasticidad cerebral? ",
    answer:
      "La psilocibina actúa a nivel prefrontal, de la región límbica y de la amígdala; y parece interactuar, pero no directamente, con la vía dopaminérgica mesolímbica encargada del sistema de recompensa. Está implicado en la neurogénesis, pudiendo modular la plasticidad sináptica mediante el aumento en largo plazo de la excitabilidad y el ratio de impulsos de neuronas glutamatérgicas y GABAérgicas. La psilocibina parece generar esa neuroplasticidad y neurogénesis mediante el receptor para neurotrofinas TrkB y el receptor de rapamicina mTOR, así como ese aumento en la expresión de FDNC. Se plantea la hipótesis de que la psilocibina y los psicodélicos clásicos relacionados, como la dietilamida del ácido lisérgico (LSD) o la N, N-dimetiltriptamina (DMT), promueven la neuroplasticidad a través de mecanismos que involucran el agonismo 5-HT2A . Los receptores de serotonina 2A, a los que se une la psilocina, son especialmente prominentes en las grandes neuronas piramidales glutamatérgicas de las capas corticales profundas que se proyectan a las neuronas piramidales de la capa V de la CPF, y en la propia capa V. Se sugiere que estos receptores aumentan rápidamente su actividad a medida que se ingiere psilocibina, lo que hipotéticamente resulta en una expresión elevada de BDNF. El estado temporal resultante de mayor neuroplasticidad puede ocurrir ya después de una dosis única psicotrópica y podría permitir cambios sinápticos importantes, lo que se sugirió que ofrece una oportunidad importante para intervenciones psicoterapéuticas. Esto indica que los efectos de la psilocibina y el MM sobre la neuroplasticidad difieren en etiología y magnitud. La psilocibina podría inducir un impulso neuroplástico transitorio pero potente, impulsado por procesos glutaminérgicos ascendentes. En contraste, MM supuestamente depende de esfuerzos regulatorios de arriba hacia abajo y fomenta la plasticidad de manera incremental a lo largo del progreso de la capacitación. Estos enfoques pueden apoyarse entre sí, ya que MM podría servir para prolongar el estado neuroplástico potencial inducido por la psilocibina y la psilocibina podría aumentar la velocidad a la que aumenta el BDNF durante el entrenamiento de MM. ",
    link: "https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2020.00224/full ",
  },
  {
    question:
      "¿Qué tan frecuente tiene que ser el consumo para causar daños en la salud? ",
    answer:
      "El consumo ocasional y moderado de psilocibina generalmente no causa daños graves en la salud. Sin embargo, el abuso o consumo excesivo y frecuente de psilocibina puede tener efectos negativos en la salud física y mental, como trastornos mentales, problemas de salud física y dependencia. Es importante consumir psilocibina con precaución y responsabilidad, siguiendo las recomendaciones de profesionales médicos calificados y evitando su uso recreativo o abusivo. ",
    link: " https://nida.nih.gov/es/areas-de-investigacion/drogas-psicodelicas-disociativas#experimenten-abstinencia ",
  },
  {
    question: "¿Por qué el consumo frecuente genera daños en la salud? ",
    answer:
      "El consumo frecuente de psilocibina puede generar daños en la salud debido a la tolerancia, la dependencia psicológica, los problemas de salud mental y los efectos físicos adversos asociados con su uso excesivo. Es importante consumir esta sustancia con moderación y responsabilidad para minimizar los riesgos para la salud. ",
    link: "https://www.erowid.org/plants/mushrooms/mushrooms_health1.pdf ",
  },
  {
    question: "¿Cuáles son los riesgos de la psilocibina? ",
    answer:
      "Algunos de los riesgos asociados con el consumo de psilocibina incluyen efectos adversos en la salud mental, posibilidad de experiencias negativas durante el viaje, riesgo de lesiones físicas, interacciones con otros medicamentos, y riesgo de consumo compulsivo. Es importante consumir psilocibina con precaución y bajo supervisión adecuada para minimizar los riesgos para la salud, teniendo en cuenta que los efectos y riesgos pueden variar según diversos factores individuales. ",
    link: "https://www.erowid.org/plants/mushrooms/mushrooms_health1.pdf ",
  },
  {
    question: "¿La psilocibina se puede consumir durante el embarazo? ",
    answer:
      "No se recomienda el consumo de psilocibina durante el embarazo, ya que existen riesgos potenciales para la salud tanto de la madre como del feto. Aunque la investigación sobre los efectos específicos de la psilocibina en el embarazo es limitada, se sabe que las sustancias psicoactivas pueden atravesar la barrera placentaria y afectar al desarrollo del feto. ",
    link: "https://nida.nih.gov/es/areas-de-investigacion/drogas-psicodelicas-disociativas#embarazo",
  },
  {
    question:
      "https://nida.nih.gov/es/areas-de-investigacion/drogas-psicodelicas-disociativas#embarazo ",
    answer:
      "Algunos riesgos potenciales incluyen interferir con el desarrollo fetal, aumentar el riesgo de complicaciones durante el parto y tener efectos a largo plazo en el niño. Por lo tanto, se aconseja evitar el consumo de psilocibina durante el embarazo. ",
    link: "https://nida.nih.gov/es/areas-de-investigacion/drogas-psicodelicas-disociativas#embarazo ",
  },
  {
    question: "¿Es posible morir por el consumo de psilocibina? ",
    answer:
      "En resumen, si bien es poco probable morir directamente por una sobredosis de psilocibina, existen riesgos asociados con su consumo que podrían poner en peligro la vida de una persona. Es importante consumir esta sustancia con precaución y bajo supervisión adecuada para minimizar cualquier riesgo potencial. ",
    link: "https://www.erowid.org/plants/mushrooms/mushrooms_death.shtml  ",
  },
  {
    question: "¿Cuál es la dosis letal de la psilocibina? ",
    answer:
      "La toxicidad de una droga se define como un ratio específico entre la dosis activa de la misma y la dosis letal, pudiéndose calcular mediante la dosis letal 50 (LD50, definida como la dosis individual de una sustancia que mata al 50% de una población sujeta a la misma, mediante una vía de administración específica y para una especie específica). En el caso de la psilocibina, la LD50 es de 280 mg/kg en ratas, significando que una persona de 60 kg de peso necesitaría hasta 17 kg de hongos frescos para alcanzar esta cantidad. ",
    link: " https://www.mdpi.com/2305-6304/11/2/148 ",
  },
  {
    question:
      "¿Es posible usar la psilocibina para tratar enfermedades neurodegenerativas como el alzheimer? ",
    answer:
      "La psilocibina facilita la formación de nuevas conexiones cerebrales (plasticidad), crucial para la recuperación de las funciones cognitivas; además, podrían catalizar el nacimiento de nuevas neuronas, reducir la inflamación asociada a la neurodegeneración en enfermedad de Alzheimer, elevar los niveles de metabolismo cerebral en regiones críticas, y -por sobre todo- mejorar las variables anímicas e inducir un estado subjetivo y duradero de bienestar. Es por la suma de estas propiedades, que Shlomi Raz (CEO y fundador de Eleusis), una empresa que investiga el uso de psicodélicos en neurología) ha afirmado que los psicodélicos podrían ser, hasta el día de hoy, el único tratamiento “multi-objetivo” para pacientes con Alzheimer. ",
    link: "https://pubmed.ncbi.nlm.nih.gov/34816433/ ",
  },
  {
    question: "¿Existe riesgo al usar psilocibina en pacientes con alzheimer? ",
    answer:
      "Algunos estudios sugieren que la psilocibina podría tener beneficios potenciales en el tratamiento de los síntomas de la enfermedad de Alzheimer, como la reducción de la ansiedad, depresión y agitación, así como la mejora del estado de ánimo y la calidad de vida. Sin embargo, es importante considerar los posibles efectos secundarios y riesgos asociados con el uso de psilocibina en pacientes con Alzheimer, como confusión, desorientación o exacerbación de los síntomas cognitivos. ",
    link: "https://www.latercera.com/que-pasa/noticia/las-drogas-psicodelicas-para-el-tratamiento-del-alzheimer/DHEVOALOZVG7JAQN4RDOEHR3CU/ ",
  },
  {
    question:
      "¿Se puede usar psilocibina en pacientes de 3ra edad y cuáles son sus beneficios? ",
    answer:
      "Se ha demostrado que la psilocibina puede tener beneficios en esta población, como la reducción de la ansiedad y depresión, mejora del estado de ánimo, aumento de la calidad de vida, promoción del bienestar emocional y espiritual, y facilitación de procesos terapéuticos y de introspección.  ",
    link: "https://www.latercera.com/que-pasa/noticia/las-drogas-psicodelicas-para-el-tratamiento-del-alzheimer/DHEVOALOZVG7JAQN4RDOEHR3CU/ ",
  },
  {
    question: " ",
    answer:
      "Los efectos generados por la psilocibina se pueden dividir en 4 áreas: área perceptual, área cognitiva, área emocional y área de disolución del ego. En el área perceptual los efectos son dosis-dependientes y varían desde imágenes mentales hasta alucinaciones complejas, así como distorsión, intensificación de la percepción, y alucinaciones básicas. El sentido del tiempo, localización y causalidad puede llegar a perder su linealidad causa-efecto. En cuanto al área cognitiva, los efectos pueden ser paradójicos y enigmáticos. Rasgos relacionados con la creatividad pueden verse acentuados como el pensamiento divergente, asociaciones de palabras poco típicas, patrones de lenguaje o asignación de significado a estímulos musicales. Desde el área emocional se genera una intensificación de los sentimientos, con ampliación del rango de emociones de entre las que se sintieron durante la exposición a la psilocibina, y una incrementada variedad de emociones como estados de euforia únicos que se caracterizan por sonrisas involuntarias, risa incontrolable, sentimiento de perdón, de conexión, atontamiento, mareo, jovialidad, exuberancia o emociones negativas. Estos efectos emocionales, en contextos de apoyo, normalmente se tratan de una experiencia positiva que va en camino de respuestas constructivas a estímulos sociales y del medio. Finalmente, en cuanto a la disolución del ego, puede ser desde algo leve hasta ser drástico siguiendo una relación dosis-dependiente. Con altas dosis de ingesta puede ser cuando se experimente disolución del yo y de la identidad, sentido de conexión con el medio o el universo o experiencias místicas, pudiendo ser regulado con estímulos como la música. Este tipo de experiencias, sin embargo, pueden ser las que acaben modulando con mayor facilidad cambios a largo plazo y rasgos de personalidad. Sin embargo, a pesar de estos efectos que pueden parecer no convenientes, se ha de tener en cuenta que, por un lado, los efectos deletéreos de la psilocibina comparado con otras drogas que alteran la mente son relativamente bajos, y que, por otro lado, pueden ser modulados según las necesidades clínicas de cada individuo.  ",
  },
];

export default function FaqPage({ question, answer, link }) {
  return (
    <div className="main-faq">
      <Navbar />
      <div className="faq-wrapper p-[20px] md:p-[50px]">
        <div className="pb-2">
          <img
            src={logoAsset}
            className="md:max-w-[300px] max-w-[200px] m-auto h-auto "
          />
        </div>
        <h1 className="md:text-[24px] text-[20px] text-[#3E3D4D] my-4 text-center">
          PRÓXIMA GENERACIÓN DE PSILOCIBINA
        </h1>
        {faqs.map((faq, index) => (
          <div key={index}>
            {index === 0 && <h2 className="">EFECTOS SECUNDARIOS</h2>}
            {index === 7 && <h2 className="">DROGADICCIÓN </h2>}
            {index === 12 && <h2 className="">PTSD</h2>}
            {index === 14 && <h2 className="">DEPRESIÓN</h2>}
            {index === 18 && <h2 className="">TOC</h2>}
            {index === 19 && <h2 className="">DOLORES MENSTRUALES</h2>}
            {index === 23 && <h2 className="">HAQUECA</h2>}
            {index === 25 && <h2 className="">NEUROPLASTICIDAD</h2>}
            {index === 26 && <h2 className="">RIESGOS Y CONSECUENCIAS</h2>}
            {index === 29 && <h2 className="">EMBARAZO</h2>}
            {index === 31 && <h2 className="">MORTALIDAD</h2>}
            {index === 33 && <h2 className="">PSILOCIBINA Y ALZHEIMER</h2>}
            {index === 36 && <h2 className="">EFECTOS FISIOLÓGICOS</h2>}
            <FaqContent
              question={faq.question}
              answer={faq.answer}
              link={faq.link}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
