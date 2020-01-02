exports.determine = (topic, object) => {
  switch (topic) {
    case "bulgogi":
      object.title = "Bulgogi";
      object.imgSrc = "/img/bulgogi.png";
      object.mid_title = "Bulgogi";
      object.content = [
        'Bulgogi (불고기), literally "fire meat", is a gui (구이; Korean-style grilled or roasted dish) made of thin, marinated slices of beef or pork grilled on a barbecue or on a stove-top griddle. It is also often stir-fried in a pan in home cooking.',
        "Sirloin, rib eye or brisket are frequently used cuts of beef for the dish. The dish originated from northern areas of the Korean Peninsula, but is a very popular dish in South Korea where it can be found anywhere from upscale restaurants to local supermarkets as pan-ready kits.",
        "(source: Wikipedia)"
      ];
      break;
    case "hotteok":
      object.title = "Hotteok";
      object.imgSrc = "/img/hotteok.png";
      object.mid_title = "Hotteok";
      object.content = [
        "Hotteok (호떡, pronounced [ho tʌk]) is a variety of filled Korean pancake, and is a popular street food of Korea.",
        "(source: Wikipedia)",
        "The filling is mainly made of cinnamon, melted sugar, and sometimes peanuts. Enjoy your winter with hot Hotteok!"
      ];
      break;
    case "sundubu":
      object.title = "Sundubu-jjigae";
      object.imgSrc = "/img/sundubu.png";
      object.mid_title = "Sundubu-jjigae";
      object.content = [
        "Sundubu-jjigae (순두부찌개) or soft tofu stew is a jjigae (찌개, Korean stew) in Korean cuisine. The dish is made with freshly curdled soft tofu (which has not been strained and pressed), vegetables, sometimes mushrooms, onion,optional seafood (commonly oysters, mussels, clams and shrimp), optional meat (commonly beef or pork), and gochujang (chili paste) or gochu garu (chili powder). The dish is assembled and cooked directly in the serving vessel, which is traditionally made of thick, robust porcelain, but can also be ground out of solid stone. A raw egg can be put in the jjigae just before serving, and the dish is delivered while bubbling vigorously. It is typically eaten with a bowl of cooked white rice and several banchan (side dishes).",
        'Extra soft tofu, called sundubu (순두부; "mild tofu") in Korean, is softer than other types of tofu and is usually sold in tubes. Although sun in sundubu doesn\'t have Sino-Korean origin, sundubu is often translated into Chinese and Japanese using the Chinese character 純, whose Korean pronunciation is sun and the meaning is "pure". Thus in China, sundubu is called chún dòufu (純豆腐; "pure tofu"), and in Japan, it is called jun tōfu (純豆腐) or sundubu (スンドゥブ)',
        "(source: Wikipedia)"
      ];
      break;
    case "kfc":
      object.title = "Korean fried chicken";
      object.imgSrc = "/img/sundubu.png";
      object.mid_title = "Korean fried chicken(KFC)";
      object.content = [
        'Korean fried chicken or KFC, usually called chikin (치킨, from the English "chicken") in Korea, refers to a variety of fried chicken dishes from South Korea, including the basic huraideu-chikin (후라이드 치킨, from the English "fried chicken") and spicy yangnyeom-chikin (양념 치킨, "seasoned chicken"). In South Korea, fried chicken is consumed as a meal, an appetizer, anju (food that is served and eaten with drinks), or as an after-meal snack. ',
        'Korean fried chicken differs from typical American fried chicken because it is fried twice; the skin is therefore crunchier and less greasy. Furthermore, Korean-style chicken is not characterized by the crags and crusty nubs associated with American fried chicken; it was described by Julia Moskin of The New York Times as a "thin, crackly and almost transparent crust". The chicken is usually seasoned with spices, sugar, and salt, prior to and after being fried. Korean fried chicken restaurants commonly use small- or medium-sized chickens; these younger chickens result in more tender meat. After frying, the chicken is usually hand-painted with sauce using a brush in order to evenly coat the chicken with a thin layer. Pickled radishes, beer, and soju are often served with Korean fried chicken.',
        "(source: Wikipedia)"
      ];
      break;
    case "contemporary":
      object.title = "Contemporary";
      object.imgSrc = "/img/contemporary.png";
      object.mid_title = "Contemporary";
      object.content = [
        "Due to the development of SNS, young Koreans are fanatical about so-called instagrammable, and the food is not an exception. Almost every city has trendy and colorful cafés and restaurants, so just check hashtags with ‘카페’ which means café, followed by the nearest station name. Visit there and chill out in the middle of your trip."
      ];
      break;
    case "toongcaron":
      object.title = "Toong-caron";
      object.imgSrc = "/img/toongcaron.png";
      object.mid_title = "Toong-caron";
      object.content = [
        "Toong-caron is another name of Korean Macaron(right). Macaron is a well-known French dessert(left), but the fillings of Toong-caron are thicker, and there are variety of garnishes on them. This is why Korean macaron is called Toong-caron, which means ‘chubby macaron.’(Toong-toong means chubby, in korean)"
      ];
      break;
    case "ocean":
      object.title = "Ocean";
      object.imgSrc = "/img/ocean.png";
      object.mid_title = "Ocean";
      object.content = [
        "Korea is mostly surrounded by water, so ocean is one of the most beautiful nature you could enjoy in Korea. The landscapes of East and West coast are different from each other, the sea at East coast is deep and has a flat coastlines(right), while the West coast has an indented coastlines and tidelands(left)."
      ];
      break;
    case "mountain":
      object.title = "Mountain";
      object.imgSrc = "/img/mountain.png";
      object.mid_title = "Mountain";
      object.content = [
        "Jirisan is a mountain located in the southern region of South Korea. It is the second-tallest mountain in South Korea after Jeju Island's Hallasan, and the tallest mountain in mainland South Korea. After Jirisan, Seoraksan is the third tallest mountain in South Korea and the second-tallest mountain on the South Korean mainland. Depends on which season you visit Korea, color of the mountain would be different.",
        "(source: Wikipedia)"
      ];
      break;
    case "river":
      object.title = "River";
      object.imgSrc = "/img/river.png";
      object.mid_title = "River";
      object.content = [
        "The Nakdong River(left), the longest river in South Korea, has played an important role throughout Korean history. The river basin has been a favored dwelling-place for as long as people have inhabited the Korean peninsula and numerous Neolithic remains have been found in the valley.",
        "The Han River(right), is a major river of South Korea located in Seoul. The Han River and its surrounding area have played an important role in Korean history. The Three Kingdoms of Korea strove to take control of this land, where the river was used as a trade route to China (via the Yellow Sea). However, the river is no longer actively used for navigation, because its estuary is located at the borders of the two Koreas, barred for entrance by any civilian.",
        "(source: Wikipedia)"
      ];
      break;
    case "bts":
      object.title = "BTS";
      object.imgSrc = "/img/bts.png";
      object.mid_title = "BTS";
      object.content = [
        "BTS, also known as the Bangtan Boys, is a seven-member South Korean boy band formed in Seoul in 2013. The septet co-writes and produces much of their output. Originally a hip hop group, their musical style has evolved to include a wide range of genres. Their lyrics, often focused on personal and social commentary, touch on the themes of mental health, troubles of school-age youth, loss, the journey towards loving oneself, and individualism. Their work features references to literature and psychological concepts and includes an alternative universe storyline. The group have staged several world tours.",
        "The group initially formed as teenagers under Big Hit Entertainment and released their debut single album, 2 Cool 4 Skool (2013). Subsequent work such as their first U.S. Billboard 200 entries The Most Beautiful Moment in Life, Part 2 (2015), The Most Beautiful Moment in Life: Young Forever (2016), and Wings (2016) helped establish BTS' reputation as a socially conscious group. Wings became BTS' first album to sell one million copies in South Korea. By 2017, BTS crossed into the international music market, leading the Korean Wave into the United States and breaking numerous sales records, becoming the first Korean group to receive a certification from the Recording Industry Association of America (RIAA) for their single \"Mic Drop\". The band is the first Korean act to top the Billboard 200 with their studio album Love Yourself: Tear (2018) and have since hit the top of the U.S. charts with their albums Love Yourself: Answer (2018) and Map of the Soul: Persona (2019), making BTS the first group since the Beatles to earn three number one albums in less than a year. Love Yourself: Answer also broke South Korea's Gaon Album Chart's all-time monthly record previously set by Love Yourself: Tear and became the first Korean album certified Gold in the United States.",
        "(source: Wikipedia)"
      ];
      break;
    case "exo":
      object.title = "EXO";
      object.imgSrc = "/img/exo.png";
      object.mid_title = "EXO";
      object.content = [
        'Exo is a South Korean–Chinese boy band based in Seoul, with nine members: Xiumin, Suho, Lay, Baekhyun, Chen, Chanyeol, D.O., Kai and Sehun. The band was formed by SM Entertainment in 2011 and debuted in 2012. Their music incorporates genres like pop, hip-hop, and R&B, alongside electronic dance music genres like house, trap, and synth-pop. Exo releases and performs music in Korean, Mandarin, and Japanese. The band ranked as one of the top five most influential celebrities on the Forbes Korea Power Celebrity list each year from 2014 to 2018, and have been named "the biggest boy band in the world" and the "kings of K-pop" by media outlets.',
        "Since 2014, Exo has exclusively performed as one group, while continuing to release and perform music in multiple languages. Previously, the band debuted with twelve members separated into two sub-groups: Exo-K (Suho, Baekhyun, Chanyeol, D.O., Kai, and Sehun) and Exo-M (Xiumin, Lay, Chen, and former members Kris, Luhan, and Tao). Exo-K and Exo-M performed music in Korean and Mandarin, respectively, until the release of their third EP Overdose in 2014. After the departures of Kris, Luhan, and Tao amid legal battles in 2014 and 2015, the band continued with the remaining nine members. Since 2016, Chen, Baekhyun, and Xiumin have also released music and performed as a sub-unit named Exo-CBX, and members Sehun and Chanyeol have promoted as a sub-unit named Exo-SC since 2019. All of Exo's members also maintain solo careers in fields including music, film, and television.",
        "(source: Wikipedia)"
      ];
      break;
    case "twice":
      object.title = "Twice";
      object.imgSrc = "/img/twice.png";
      object.mid_title = "Twice";
      object.content = [
        "Twice is a South Korean girl group formed by JYP Entertainment through the 2015 reality show Sixteen. The group is composed of nine members: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu. The group debuted on October 20, 2015, with the extended play (EP) The Story Begins. ",
        'Twice rose to fame in 2016 with their single "Cheer Up". The song charted at number 1 on the Gaon Digital Chart and became the best-performing single of the year. It also won "Song of the Year" at two major music awards shows—Melon Music Awards and Mnet Asian Music Awards. Their subsequent single "TT", from their third EP Twicecoaster: Lane 1, claimed the top spot for four consecutive weeks. The EP was the highest selling K-pop girl group album of 2016, which sold 350,852 copies by year-end. Within 19 months after debut, Twice has sold over 1.2 million units of their four EPs and special album. ',
        "(source: Wikipedia)"
      ];
      break;
    case "wmok":
      object.title = "War Memorial of Korea";
      object.imgSrc = "/img/war-memorial-of-korea.png";
      object.mid_title = "War Memorial of Korea";
      object.content = [
        "The War Memorial of Korea is located in Yongsan-dong, Yongsan-gu, Seoul, South Korea. It opened in 1994 on the former site of the army headquarters to exhibit and memorialize the military history of Korea. It was built for the purpose of preventing war through lessons from the Korean War and for the hoped for peaceful reunification of North and South Korea. The memorial building has six indoor exhibition rooms and an outdoor exhibition centre displaying war memorabilia and military equipment from China,South Korea and United States.",
        "The War Memorial was built to commemorate actors and victims in the wars which led to the modern nation state. The museum also has the purpose of educating future generations by collecting, preserving, and exhibiting various historical relics and records related to the many wars fought in the country from a South Korean perspective.",
        "(source: Wikipedia)"
      ];
      break;
    case "dmz":
      object.title = "Korean Demilitarized Zone";
      object.imgSrc = "/img/dmz-2.png";
      object.mid_title = "Korean Demilitarized Zone(DMZ)";
      object.content = [
        "The Korean Demilitarized is a strip of land running across the Korean Peninsula. It is established by the provisions of the Korean Armistice Agreement to serve as a buffer zone between North Korea and South Korea. The demilitarized zone (DMZ) is a border barrier that divides the Korean Peninsula roughly in half. It was created by agreement between North Korea, China and the United Nations Command in 1953. The DMZ is 250 kilometres (160 miles) long, and about 4 kilometres (2.5 miles) wide.",
        'The 38th parallel north—which divides the Korean Peninsula roughly in half—was the original boundary between the United States and Soviet Union\'s brief administration areas of Korea at the end of World War II. Upon the creation of the Democratic People\'s Republic of Korea (DPRK, informally "North Korea") and the Republic of Korea (ROK, informally "South Korea") in 1948, it became a de facto international border and one of the most tense fronts in the Cold War.',
        "Both the North and the South remained dependent on their sponsor states from 1948 to the outbreak of the Korean War. That conflict, which claimed over three million lives and divided the Korean Peninsula along ideological lines, commenced on 25 June 1950, with a full-front DPRK invasion across the 38th parallel, and ended in 1953 after international intervention pushed the front of the war back to near the 38th parallel.",
        "(source: Wikipedia)"
      ];
      break;
    case "changdeokgung":
      object.title = "Changdoekgung";
      object.imgSrc = "/img/changdeokgung.png";
      object.mid_title = "Changdoekgung";
      object.content = [
        'Changdeokgung (昌德宮; literally, "Prospering Virtue Palace"), also known as Changdeokgung Palace or Changdeok Palace, is set within a large park in Jongno-gu, Seoul, South Korea. It is one of the "Five Grand Palaces" built by the kings of the Joseon Dynasty (1392–1897).[1] As it is located east of Gyeongbok Palace, Changdeokgung—along with Changgyeonggung—is also referred to as the "East Palace" (동궐, 東闕, Donggwol).',
        "Changdeokgung was the most favored palace of many Joseon princes and retained many elements dating from the Three Kingdoms of Korea period that were not incorporated in the more contemporary Gyeongbokgung. One such element is the fact that the buildings of Changdeokgung blend with the natural topography of the site instead of imposing themselves upon it. It, like the other Five Grand Palaces in Seoul, was heavily damaged during the Japanese occupation of Korea (1910–1945). Currently, only about 30% of the pre-Japanese structures of the East Palace Complex (Changdeokgung together with Changgyeonggung) remains.",
        "(source: Wikipedia)"
      ];
      break;
    case "gyeongbokgung":
      object.title = "Gyeongbokgung";
      object.imgSrc = "/img/gyeongbokgung.png";
      object.mid_title = "Gyeongbokgung";
      object.content = [
        "Gyeongbokgung also known as Gyeongbokgung Palace or Gyeongbok Palace, was the main royal palace of the Joseon dynasty. Built in 1395, it is located in northern Seoul, South Korea. The largest of the Five Grand Palaces built by the Joseon dynasty, Gyeongbokgung served as the home of Kings of the Joseon dynasty, the Kings' households, as well as the government of Joseon.",
        "Gyeongbokgung continued to serve as the main palace of the Joseon dynasty until the premises were destroyed by fire during the Imjin War (1592–1598) and abandoned for two centuries. However, in the 19th century, all of the palace's 7,700 rooms were later restored under the leadership of Prince Regent Heungseon during the reign of King Gojong. Some 500 buildings were restored on a site of over 40 hectares. The architectural principles of ancient Korea were incorporated into the tradition and appearance of the Joseon royal court.",
        "In the early 20th century, much of the palace was systematically destroyed by Imperial Japan. Since then, the walled palace complex is gradually being restored to its original form. Today, the palace is arguably regarded as being the most beautiful and grandest of all five palaces. It also houses the National Palace Museum of Korea and the National Folk Museum within the premises of the complex.",
        "(source: Wikipedia)"
      ];
      break;
    case "bulguksa":
      object.title = "Bulguksa";
      object.imgSrc = "/img/bulguksa.png";
      object.mid_title = "Bulguksa";
      object.content = [
        "Bulguksa is located on the slopes of Mount Toham (Jinheon-dong, Gyeongju city, North Gyeongsang province, South Korea). It is a head temple of the Jogye Order of Korean Buddhism and encompasses seven National treasures of South Korea, including the Dabotap and Seokgatap stone pagodas, Cheongun-gyo (Blue Cloud Bridge), and two gilt-bronze statues of Buddha. The temple is classified as Historic and Scenic Site No. 1 by the South Korean government.[1] In 1995, Bulguksa was added to the UNESCO World Heritage List together with the Seokguram Grotto, which lies four kilometers to the east.",
        "The temple is considered as a masterpiece of the golden age of Buddhist art in the Silla kingdom. It is currently the head temple of the 11th district of the Jogye Order of Korean Buddhism.",
        "Among the earliest woodblock prints in the world, a version of the Dharani sutra dated between 704 and 751 was found there in 1966. Its Buddhist text was printed on a 8 cm × 630 cm (3.1 in × 248.0 in) mulberry paper scroll.",
        "(source: Wikipedia)"
      ];
      break;
    case "myeongdong":
      object.title = "Myeongdong Cathedral";
      object.imgSrc = "/img/myeongdong-cathedral.png";
      object.mid_title = "Myeongdong Cathedral";
      object.content = [
        "The Cathedral Church of Virgin Mary of the Immaculate Conception, informally known as Myeongdong Cathedral, is the national cathedral of the Roman Catholic Archdiocese of Seoul. Located in the Myeongdong neighborhood of Jung-gu, Seoul, South Korea, it is the seat of the Archbishop of Seoul Cardinal Andrew Yeom Soo-jung, the highest Roman Catholic prelate of the nation.",
        "Dedicated to Blessed Virgin Mary, the Immaculate Conception is the principal Patroness of Korea by a Pontifical decree accorded by Pope Gregory XVI in 1841. The cathedral serves as a community landmark, tourist attraction, and a notable symbol of Roman Catholicism in Korea. The Korean government assigned the cathedral as a historic site (No. # 258) on 22 November 1977, making it a cultural property and asset of the country.",
        "(source: Wikipedia)"
      ];
      break;
  }
  return object;
};
