document.addEventListener('DOMContentLoaded', function() {
    const cuentos = [
        {
            titulo: "El Bosque de los sueños",
            contenido: "<p>Había una vez un mágico lugar conocido como ‘El Bosque de los Sueños’. Era un bosque encantado en el que todo era tranquilo y pacífico. Los árboles altos y antiguos se mecían suavemente con la brisa, y los rayos del sol se filtraban a través de las hojas, creando un mosaico de luces y sombras en el suelo.</p><p>En este bosque vivía un simpático zorro llamado Max. Max era curioso y amigable, y le encantaba explorar el bosque en busca de aventuras. Un día, mientras caminaba por el bosque, encontró una hermosa mariposa de colores brillantes. La mariposa parecía estar volando en círculos, como si estuviera buscando algo.</p><p> Max se acercó con cuidado y le preguntó a la mariposa: ‘¿Qué estás buscando, amiga mariposa?’</p><p>La mariposa se posó en el hocico de Max y le susurró: ‘Estoy buscando el lugar más tranquilo del bosque, donde pueda descansar y relajarme’.</p><p> Max sonrió y dijo: ‘¡Te llevaré allí! Conozco el lugar perfecto’. Y juntos, el zorro y la mariposa se adentraron más en el bosque.</p><p>Caminaron a lo largo de un arroyo, donde el agua fluía suavemente y los pájaros cantaban canciones melodiosas desde los árboles. Llegaron a un claro en el bosque, donde el suelo estaba cubierto de suaves almohadillas de musgo. Max y la mariposa se acostaron en el musgo y miraron el cielo azul.</p><p>El viento soplaba suavemente, y Max le dijo a la mariposa: ‘Este es el lugar más tranquilo del bosque, donde puedes descansar y relajarte. Aquí, los sueños se hacen realidad’.</p><p>La mariposa cerró los ojos y se dejó llevar por la tranquilidad del lugar. Mientras descansaba, comenzó a soñar con un mundo lleno de colores y aventuras, donde podía volar alto y visitar lugares mágicos.</p><p>Max se quedó a su lado, cuidándola, y pronto ambos se quedaron dormidos, sumidos en los sueños relajantes del Bosque de los Sueños.</p><p>Y así, en ese mágico lugar, los sueños se convirtieron en realidad, y todos los que visitaban el Bosque de los Sueños encontraban paz y felicidad en su corazón. </p>",
            imagen: "static/images/bosque.jpeg"
        },

        {
            titulo: "El viaje del osito polar",
            contenido: "<p>Había una vez un pequeño osito polar llamado Nieve. Nieve vivía en el Ártico, donde la nieve brillaba como diamantes y el hielo se extendía tan lejos como alcanzaba la vista. Pero, a pesar de la belleza de su hogar, Nieve sentía curiosidad por el mundo más allá del hielo.</p><p>Un día, mientras jugaba en la nieve, Nieve vio una gran mariposa de nieve. Esta mariposa no era como las demás; tenía destellos plateados en sus alas. La mariposa le habló a Nieve en un suave susurro: ‘Pequeño osito, ¿alguna vez has soñado con explorar lugares lejanos y descubrir nuevos horizontes?’</p><p> Nieve asintió con la cabeza y dijo: ‘Sí, mariposa, siempre he soñado con aventuras y descubrimientos’.</p><p>La mariposa de nieve sonrió y le dijo: ‘Entonces, sube a mi espalda, Nieve, y te llevaré en un viaje mágico a través del Ártico’.</p><p> Nieve montó en la espalda de la mariposa, y en un abrir y cerrar de ojos, despegaron del suelo. Volaban por encima del hielo y la nieve, viendo el Ártico desde las alturas. Nieve se maravilló con las vistas, mientras los copos de nieve danzaban alrededor de ellos.</p><p>La mariposa de nieve lo llevó a un misterioso bosque de auroras boreales, donde las luces danzaban en el cielo de colores brillantes. Nieve se sintió como si estuviera en un cuento de hadas. Luego, volaron sobre un vasto océano, donde vieron ballenas saltando y delfines jugando en las olas.</p><p>Finalmente, la mariposa de nieve lo llevó de regreso a casa, y Nieve agradeció a la mariposa por la maravillosa aventura. Se dio cuenta de que, aunque el Ártico era su hogar, el mundo estaba lleno de maravillas y bellezas que nunca había imaginado.</p><p>De regreso en su casa, Nieve se acurrucó en su cueva, con el corazón lleno de gratitud y felicidad. Cerró los ojos y se durmió, soñando con las aventuras que había vivido y las que aún estaban por venir.</p><p>Y así, Nieve aprendió que incluso en su hogar tranquilo en el Ártico, podía encontrar la emoción y la belleza en cada rincón del mundo.</p>",
            imagen: "static/images/osopolar.jpeg"
        },

        {
            titulo: "La estrella perdida",
            contenido: "<p>Había una vez una pequeña estrella llamada Stella que un día cayó del cielo y se perdió en la Tierra. Stella era una estrella muy especial, ya que brillaba con destellos dorados. Mientras caía, se dio cuenta de que estaba muy lejos de su hogar en el cielo.</p><p>Stella rodó por un campo de flores y se encontró con un simpático conejito llamado Pompon. Pompon le preguntó a Stella por qué estaba triste, y Stella le contó sobre su deseo de volver a casa en el cielo.</p><p>Pompon decidió ayudar a Stella a encontrar su camino de regreso. Juntos, comenzaron un viaje mágico a través del bosque y cruzaron arroyos cristalinos. Se encontraron con una sabia lechuza que les dio consejos sobre cómo llegar al cielo.</p><p>Finalmente, Stella y Pompon llegaron a una colina alta, y Stella brilló tan intensamente que su brillo iluminó el cielo. La gente de la Tierra miró hacia arriba y vio la estrella brillando en lo alto.</p><p>En ese momento, Stella sintió un tirón en su interior y supo que era hora de regresar a casa en el cielo. Con un destello dorado, Stella ascendió y se convirtió en una brillante estrella en el firmamento. Todos los que la vieron sonrieron, sabiendo que Stella estaba de nuevo en casa. Pompon miró al cielo y supo que su amiga brillaba sobre él todas las noches.</p>",
            imagen: "static/images/estrella estela.jpeg"
        },

        {
            titulo: "El sueño del pececito",
            contenido: "<p>En el fondo del océano vivía un pececito llamado Finny. Finny siempre había soñado con ver el mundo fuera del agua, pero sabía que los peces no estaban hechos para vivir en la tierra.</p><p>Un día, mientras nadaba cerca de la superficie, vio una brillante burbuja que se elevaba hacia la superficie. Finny decidió seguirla y, de repente, se encontró en la playa. Estaba asombrado por la arena suave y la inmensidad del mundo fuera del agua.</p><p>Finny saltó en la orilla y experimentó la sensación del sol cálido en sus escamas. Se dio cuenta de que podía respirar fuera del agua, lo que nunca había imaginado. Corrió por la playa, saltando y explorando la costa.</p><p>Pero Finny también sintió nostalgia por su hogar en el océano. Después de un rato, decidió regresar, saltó de nuevo al agua y nadó de vuelta al mar. Se sumergió en las profundidades y se dio cuenta de que, aunque había sido emocionante explorar la tierra, el océano era su verdadero hogar.</p><p>Finny regresó a su familia en el arrecife de coral y les contó sobre su aventura en tierra. Aprendió que a veces, es natural sentir curiosidad por lo desconocido, pero siempre podemos regresar a nuestro hogar y valorar lo que tenemos.</p>",
            imagen: "static/images/pececito.jpeg"
        },

        {
            titulo: "El bosque de las Luciérnagas",
            contenido: "<p>En un bosque misterioso y oscuro vivían muchas luciérnagas. Estas pequeñas criaturas pasaban sus noches iluminando el bosque con sus brillantes lucecitas. Pero había una luciérnaga llamada Lila que no brillaba tan intensamente como las demás. Se sentía triste porque pensaba que no era tan especial como sus amigos.</p><p>Una noche, Lila decidió aventurarse más profundo en el bosque en busca de una respuesta. En su viaje, se encontró con un búho sabio que le dijo: ‘Lila, no necesitas ser la más brillante para ser especial. Todos tienen su propia luz y belleza única’.</p><p>Con estas palabras en mente, Lila regresó al bosque y se dio cuenta de que, aunque su luz era tenue, ayudaba a iluminar el camino de los demás. Apreció su propia luz y encontró la felicidad en ser quien era. Desde entonces, el bosque brilló aún más hermoso gracias a la luz de todas las luciérnagas, grandes y pequeñas.</p>",
            imagen: "static/images/luciernagas.jpeg"
        },

        {
            titulo: "La aventura del gatito explorador",
            contenido: "<p> Había un gatito llamado Mimo que vivía en un tranquilo rincón del vecindario. Mimo siempre había soñado con aventuras y explorar el mundo más allá de su jardín. Un día, mientras su dueño dejó la puerta abierta, Mimo se aventuró más allá de su hogar.</p><p>Mimo exploró calles, parques y conoció a otros gatos, perros y personas amigables. Cada nueva experiencia le llenó de emoción y asombro. Pero después de un tiempo, Mimo empezó a extrañar a su hogar y su dueño.</p><p>Con la ayuda de un amable pájaro, Mimo encontró el camino de regreso a su casa. Estaba feliz de volver y agradecido por su aventura. Ahora, Mimo sabía que su hogar era especial, pero también sabía que siempre había aventuras esperando a la vuelta de la esquina.</p>",
            imagen: "static/images/gatito.jpeg"
        },

        {
            titulo: "El misterio del Unicornio perdido",
            contenido: "<p>En un mágico bosque encantado, vivía un unicornio llamado Arcoíris. Arcoíris era conocido por su hermoso pelaje multicolor y su cuerno resplandeciente. Un día, Arcoíris decidió explorar más allá del bosque y se adentró en un frondoso laberinto.</p><p>Mientras exploraba el laberinto, Arcoíris escuchó un llanto suave. Siguió el sonido y encontró a un pequeño poni que se había perdido. El poni se llamaba Estrellita y tenía miedo de no encontrar su camino de regreso a casa.</p><p>Arcoíris decidió ayudar a Estrellita a encontrar su camino de regreso al pueblo de los ponis. Juntos, superaron obstáculos y desafíos en el laberinto y finalmente encontraron la salida. Estrellita estaba agradecida y emocionada por regresar a su hogar.</p><p>Arcoíris, a su vez, regresó al bosque encantado y se dio cuenta de que aunque las aventuras son emocionantes, lo que más valoraba era su hogar y la amistad que había hecho. Desde entonces, Arcoíris y Estrellita siguieron siendo amigos y visitaron el bosque encantado y el pueblo de los ponis juntos.</p>",
            imagen: "static/images/unicornio.jpeg"
        },
        
        {
            titulo: "El sol y la Luna",
            contenido: "<p>Hace mucho tiempo, el Sol y la Luna vivían en el cielo, pero nunca se cruzaban. El Sol brillaba intensamente durante el día, y la Luna iluminaba la noche con su luz plateada, pero ambos se sentían solos en su vasto reino.</p><p>Un día, el Sol miró hacia la noche y vio a la Luna iluminando el cielo. Admiró su belleza y su serenidad. El Sol decidió que quería conocer a la Luna y ser amigos.</p><p>Así que, en un atardecer, el Sol comenzó a descender hacia el horizonte. La Luna, que siempre estaba atenta a lo que sucedía en el cielo, lo vio acercarse y se llenó de emoción. Cuando el Sol finalmente tocó la superficie de la Tierra, la Luna descendió lentamente hacia la noche.</p><p>Se encontraron en el crepúsculo, donde el día y la noche se abrazaban. El Sol y la Luna se saludaron y comenzaron a conversar. Descubrieron que tenían muchas cosas en común y compartieron historias sobre sus vidas en el cielo.</p><p>Desde ese día, el Sol y la Luna se hicieron amigos inseparables. Aprendieron a coordinarse para que siempre hubiera luz en el cielo, ya sea de día o de noche. Juntos, crearon hermosas salidas y puestas de sol que llenaban a la Tierra de colores vibrantes.</p><p>Los seres humanos miraban maravillados el cielo, y agradecían la amistad del Sol y la Luna, que hacían que el mundo fuera un lugar más hermoso y equilibrado. El Sol y la Luna nunca se sintieron solos de nuevo, ya que tenían el regalo de la amistad y la belleza que compartían con el mundo.</p>",
            imagen: "static/images/solLuna.jpeg"
        },
        
        {
            titulo: "El pequeño Semillita",
            contenido: "<p>En un tranquilo jardín, vivía una pequeña semilla llamada Sami. Sami anhelaba crecer y ser un hermoso girasol como sus amigos en el jardín. Pero cada día, miraba su pequeña y frágil cáscara y se sentía desanimada. </p><p> Un día, una abeja llamada Maya se posó cerca de Sami. Maya vio la tristeza en los ojos de Sami y le dijo: ‘Pequeña semilla, no te preocupes. Todos crecemos a nuestro propio ritmo, y cuando llegue tu momento, serás tan hermosa como los girasoles más grandes’.</p><p>Sami se sintió reconfortada por las palabras de Maya y continuó cuidando su pequeña planta con paciencia. Con el tiempo, sus raíces se hicieron más fuertes, y finalmente, un brote verde comenzó a emerger.</p><p>A medida que los días pasaban, Sami creció y se convirtió en un hermoso girasol. Sus pétalos dorados se alzaban hacia el cielo, y su rostro seguía al sol a lo largo del día. Sami se dio cuenta de que la espera había valido la pena y que su belleza era única.</p><p>Desde entonces, Sami comprendió que todos somos especiales a nuestra manera y que el crecimiento lleva tiempo. Así que siguió siendo un hermoso girasol, compartiendo su belleza y alegría con el mundo.</p>",
            imagen: "static/images/semilla.jpeg"
        },

        {
            titulo: "El León y la Mariposa",
            contenido: "<p>En las vastas llanuras africanas, vivía un majestuoso león llamado Leo. Aunque era el rey de la selva, Leo a menudo se sentía solitario. Un día, mientras descansaba a la sombra de un árbol, una pequeña mariposa llamada Mía se posó en su nariz.</p><p>Leo se sorprendió al sentir la ligereza de la mariposa y la miró con curiosidad. Mía le dijo: ‘Hola, señor león. He estado viendo cómo ronda por la selva y parece que está solo. ¿Qué le pasa?’</p><p> Leo suspiró y le contó a Mía sobre su soledad. Mía, con su voz suave, le dijo: ‘Incluso el rey de la selva merece amistad y compañía. Puedo ser tu amiga, si lo deseas’.</p><p>Leo aceptó la oferta de amistad de Mía y descubrió que, a pesar de sus diferencias, se llevaban muy bien. Mía le mostró los lugares secretos de la selva que Leo no conocía, y Leo la protegió de los peligros de la selva.</p><p>Con el tiempo, Leo y Mía se convirtieron en los mejores amigos. La selva se llenó de risas y alegría gracias a su inusual amistad. Leo ya no se sentía solo y descubrió que la amistad puede surgir en los lugares más inesperados.</p>",
            imagen: "static/images/leonMariposa.jpeg"
        },

        {
            titulo: "El sueño de Estela", 
            contenido:"<p>Estela era una estrella que brillaba en el cielo nocturno. Ella siempre había soñado con visitar la Tierra y conocer a los seres que vivían allí. Cada noche, miraba hacia abajo con curiosidad y asombro.</p><p>Una noche, una estrella fugaz pasó junto a Estela y le susurró al oído: ‘Puedes hacer realidad tu sueño. Deja que tu luz te guíe’. Siguiendo este consejo, Estela descendió lentamente desde el cielo y aterrizó en un tranquilo rincón del mundo.</p><p>En la Tierra, Estela conoció a un grupo de niños que jugaban en el jardín. Los niños se asombraron al ver a una verdadera estrella brillante ante ellos. Estela les contó sobre su deseo de conocer la Tierra y los niños la llevaron a explorar su mundo.</p><p>Estela saltó sobre colinas, nadó en ríos y se maravilló con los bosques. Descubrió la belleza y la diversidad de la Tierra. Cuando llegó la mañana, Estela supo que debía regresar al cielo, pero se despidió de los niños con una promesa: siempre brillaría sobre ellos en la noche, recordándoles la belleza del mundo y la magia de los sueños.</p>",
            imagen: "static/images/estrellita.jpeg"
        },

        {
            titulo: "El Árbol de los deseos",
            contenido: "<p>En el corazón de un bosque antiguo crecía un árbol muy especial llamado Wisha. Este árbol tenía hojas que brillaban como estrellas y raíces profundas que se extendían por la tierra. Wisha tenía un don: podía hacer realidad los deseos. </p><p>Los animales del bosque solían visitar a Wisha para pedir deseos. El pájaro cantor deseaba una hermosa canción, la ardilla deseaba nueces y el conejo deseaba un traje más cálido para el invierno. Wisha siempre escuchaba y hacía que los deseos se cumplieran. \n\n Un día, un niño llamado Lucas encontró el árbol y le pidió un deseo especial: que todos los seres del bosque tuvieran siempre lo que necesitaran. Wisha concedió su deseo y desde entonces, el bosque floreció en abundancia. Los animales y la naturaleza vivieron en armonía, y todos tenían lo que necesitaban. \n\n Lucas siguió visitando a Wisha, y cada vez que lo hacía, se sentía más agradecido por el regalo de la naturaleza y la magia de los deseos. Aprendió a valorar lo que tenía y a compartir su amor por la naturaleza con otros.</p>",
            imagen: "static/images/arbolDeseos.jpeg"
        },

        {
            titulo: "El ángel de la noche",
            contenido: "<p>En un pueblo tranquilo, había un pequeño faro en el muelle. Cada noche, un guardián llamado Lucas subía al faro y encendía su luz para guiar a los barcos en el oscuro mar. Era un trabajo solitario, pero Lucas lo hacía con amor y dedicación.</p><p> Un día, Lucas conoció a un búho que había perdido su camino en la noche oscura. El búho le preguntó a Lucas si alguna vez se sentía solo mientras trabajaba en el faro. Lucas le respondió: ‘Nunca me siento solo, porque sé que estoy iluminando el camino y ayudando a otros’.</p><p>El búho le agradeció a Lucas y prometió guiar a otros animales en la noche con su sabiduría. Desde ese día, el búho se convirtió en el ‘Ángel de la Noche’, compartiendo su sabiduría y ayudando a quienes se habían perdido en la oscuridad.</p>",
            imagen: "static/images/angelNoche.jpeg"
        },

        {
            titulo: "Las aventuras de Roco el Pingüino",
            contenido: "<p>Roco era un pingüino curioso que vivía en la fría Antártida. Siempre soñaba con aventuras lejos de su hogar en el hielo, pero no podía dejar a su familia y amigos. </p><p>Un día, mientras nadaba en el océano, Roco se encontró con una tortuga llamada Tita que estaba de visita desde lejos. Tita le contó a Roco sobre las playas cálidas y los océanos azules que había visto en sus viajes.</p><p>Roco se sintió tentado por la idea de explorar el mundo, pero también sabía cuánto significaba su familia y su hogar en la Antártida. Tita le dijo: ‘Puedes tener aventuras y seguir siendo leal a tu hogar. La verdadera aventura es aprender a equilibrar ambas cosas’.</p><p>Roco regresó a casa, donde compartió sus emocionantes historias con su familia y amigos. Juntos, planearon excursiones en la Antártida para descubrir nuevas maravillas juntos. Roco aprendió que la aventura no siempre significa dejar atrás lo que amamos, y que a veces, las mayores aventuras ocurren en nuestro propio hogar.",
            imagen: "static/images/tortugaPinguina.jpeg"
        },

        {
            titulo: "El regalo de la luz de la Luna",
            contenido: "<p>Hace mucho tiempo, en un pequeño pueblo, la gente esperaba con ansias la llegada de la Luna llena. En esa noche especial, todos se reunían en la plaza para admirar su resplandor plateado.</p><p>Había un niño llamado Leo que estaba triste porque su familia no podía asistir a las reuniones nocturnas. Siempre se sentía solo y excluido en esas noches brillantes. Un anciano del pueblo notó la tristeza de Leo y decidió hacer algo al respecto.</p><p>El anciano se acercó a Leo y le dio un pequeño farolillo con una vela dentro. Le dijo: ‘Este farolillo es tu propio pedazo de la Luna. Puedes llevarlo contigo a donde quieras y nunca te sentirás solo en las noches de Luna llena’.</p><p>Leo tomó el farolillo con gratitud y, esa noche, se unió a la celebración en la plaza. Aunque no podía ver la Luna directamente, el resplandor de su farolillo le recordaba que siempre había una parte de la Luna con él. </p><p> Desde entonces, Leo nunca se sintió solo en las noches de Luna llena, y compartió su luz con otros que también anhelaban la compañía de la Luna. Este cuento nos enseña que la luz y la amistad pueden llenar cualquier espacio de soledad</p>",
            imagen: "static/images/luz.jpeg"
        },

        {
            titulo: "El árbol de las palabras mágicas",
            contenido: "<p>En un lejano bosque, crecía un árbol muy especial llamado Cedric. Cedric tenía hojas que brillaban como las estrellas y raíces que se adentraban profundamente en la tierra. Pero lo más asombroso de Cedric eran las palabras que sus ramas susurraban en el viento: palabras mágicas. </p><p> Los animales del bosque solían visitar a Cedric en busca de palabras mágicas. Cada palabra podía conceder un deseo o traer alegría a sus vidas. El búho deseaba sabiduría, el ciervo buscaba amor y el zorro anhelaba aventura. Cedric siempre compartía palabras mágicas con amor y alegría.</p><p>Un día, un niño llamado Tom encontró el árbol y le pidió una palabra mágica especial. Cedric le regaló la palabra ‘sueños’. Tom llevó consigo esta palabra y, desde entonces, comenzó a soñar en grande. Trabajó duro para hacer realidad sus sueños y, con el tiempo, logró muchas cosas maravillosas.</p><p>Tom visitó a Cedric de nuevo y le agradeció por el regalo de ‘sueños’. Cedric le recordó que las palabras mágicas estaban en todas partes y que cada uno podía crear su propio futuro con ellas. Tom se dio cuenta de que las palabras mágicas estaban en su corazón y que podía compartirlas con el mundo.</p>",
            imagen: "static/images/deseos.jpeg"
        },

        {
            titulo: "El lago de los deseos",
            contenido: "<p>En el corazón de un mágico bosque se encontraba un lago especial llamado el ‘Lago de los Deseos’. Se decía que, si alguien arrojaba una piedra al lago y pedía un deseo con todo su corazón, ese deseo se haría realidad. </p><p> Un día, un pequeño zorro llamado Zara se acercó al lago. Zara estaba llena de deseos: quería ser más rápido, ser más inteligente y tener amigos. Arrojó una piedra al lago y pidió con sinceridad sus deseos. </p><p> Para su sorpresa, un halo dorado apareció en la superficie del lago, y los deseos de Zara comenzaron a hacerse realidad. Se volvió más rápido, más inteligente y conoció a nuevos amigos que la aceptaron tal como era. </p><p>Zara regresó al lago y se dio cuenta de que, aunque los deseos eran maravillosos, lo que más valoraba era la amistad y la confianza que había construido con sus nuevos amigos. Aprendió que la magia de la amistad podía hacer realidad los deseos de una manera única.</p>",
            imagen: "static/images/lago.jpeg"
        },

        {
            titulo: "Las huellas de la montaña",
            contenido: "<p>En las altas montañas, vivía una cabra llamada Curro. Curro amaba escalar y explorar las cimas cubiertas de nieve. Una noche, durante una tormenta, Curro se perdió en la montaña y no podía encontrar su camino de regreso. </p><p> Curro decidió buscar refugio en una cueva. Mientras esperaba a que pasara la tormenta, encontró algunas huellas en la roca. Las huellas estaban talladas por el viento y el hielo a lo largo de los años y representaban el camino a casa. </p><p> Siguiendo las huellas, Curro finalmente regresó a su hogar sano y salvo. Desde ese día, se dio cuenta de que las montañas tenían historias que contar y que siempre podía confiar en las huellas para guiarlo de regreso a casa. </p><p> Este cuento nos recuerda que, incluso en las situaciones más difíciles, siempre hay una forma de encontrar nuestro camino, y a menudo, es a través de la orientación y la determinación.</p>",
            imagen: "static/images/cabra.jpeg"
        },

        {
            titulo: "El río de las emociones",
            contenido: "<p>Había un río serpenteante que atravesaba un hermoso bosque. Pero este río era un poco diferente: en lugar de agua, fluían las emociones de las criaturas del bosque. Las lágrimas de los tristes, las risas de los felices y los suspiros de los soñadores se mezclaban en el río. </p><p> Un día, un zorrito llamado Milo decidió hacer un viaje en balsa por el río de las emociones. Navegó por aguas turbulentas de tristeza, se divirtió en los rápidos de la alegría y soñó mientras flotaba en la serenidad de los suspiros.</p><p> Al final de su viaje, Milo se dio cuenta de que todas las emociones eran importantes y que, al experimentarlas, las criaturas del bosque podían comprenderse mejor y ayudarse mutuamente en momentos de necesidad. Desde entonces, Milo vivió su vida con un mayor entendimiento de las emociones y con empatía hacia los demás.</p>",
            imagen: "static/images/lagoEmociones.jpeg"
        },

        {
            titulo: "La cometa y el viento",
            contenido: "<p>Había una vez una cometa llamada Kiko que soñaba con volar más alto y más lejos que ninguna otra cometa. Kiko se pasaba los días en el campo, esperando el momento adecuado para elevarse hacia el cielo. </p><p> Un día, el viento suave de la primavera llegó a visitar a Kiko. Kiko le preguntó si podría llevarlo a volar alto en el cielo. El viento asintió y llevó a Kiko a un emocionante viaje por los cielos. </p><p> Mientras volaban, Kiko se dio cuenta de que, aunque soñar con llegar alto era importante, también era igual de importante disfrutar del viaje. Juntos, Kiko y el viento volaron alto, se sumergieron en las nubes y exploraron el mundo desde arriba. </p><p> Después del viaje, Kiko regresó a la Tierra, sabiendo que había cumplido su sueño. Pero también entendió que la amistad y el disfrute del viaje eran igual de valiosos. Desde entonces, Kiko siguió volando con alegría, sabiendo que siempre habría aventuras esperando en el cielo.</p>" ,
            imagen: "static/images/cometa.jpeg"
        }
        ];

         // Obtiene una referencia al elemento que mostrará el cuento
    const cuentoDisplay = document.getElementById('cuento-display');

    // Agrega un evento de clic a cada botón
    for (let i = 1; i <= 20; i++) {
        const boton = document.getElementById('cuento' + i);
        boton.addEventListener('click', function() {
            // Llama a la función para mostrar el cuento correspondiente
            mostrarCuento(i);
        });
    }

    // Función para mostrar un cuento
    function mostrarCuento(numeroCuento) {
        // Oculta los elementos que no son necesarios
        const encabezado = document.querySelector('h2');
        const botones = document.querySelectorAll('.button');
        encabezado.style.display = 'none';
        botones.forEach(boton => boton.style.display = 'none');

        // Muestra el cuento seleccionado
        const cuento = cuentos[numeroCuento - 1];
        cuentoDisplay.innerHTML = `
            <h2>${cuento.titulo}</h2>
            <p>${cuento.contenido}</p>
            <img src="${cuento.imagen}" alt="${cuento.titulo}">
        `;

        // Muestra el botón de "Regresar a cuentos"
        const regresarButton = document.getElementById('regresar');
        regresarButton.style.display = 'block';

        // Agrega un evento de clic al botón "Regresar a cuentos" para regresar
        regresarButton.addEventListener('click', function() {
            // Restaura la visibilidad de los elementos ocultos
            encabezado.style.display = 'block';
            botones.forEach(boton => boton.style.display = 'block');
            cuentoDisplay.innerHTML = ''; // Limpia el cuento mostrado
            regresarButton.style.display = 'none'; // Oculta el botón "Regresar a cuentos"
        });
    }

});
