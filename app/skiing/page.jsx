"use client";
import client from "@/app/contentful";
import { ContactUs } from "../components/ContactUs";
import { Map } from "../components/Map";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/styles.module.scss";

export const getData = async () => {
  try {
    const res = await client.getEntries({
      content_type: "products",
      "sys.id": process.env.NEXT_PUBLIC_ENTRY_ID,
    });
    const items = res.items;
    return items;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return [];
  }
};

const Skiing = async () => {
  const items = await getData();

  return (
    <>
      <section>
        <div className="container">
          <div>
            <div className={styles.bicycleContainer}>
              <h2>Прокат горных лыж</h2>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.winter} border="1">
                <thead>
                  <tr>
                    <th>Сутки</th>
                    <th>12ч</th>
                    <th>1 сутки</th>
                    <th>2 суток</th>
                    <th>3 суток</th>
                    <th>4 суток</th>
                    <th>5 суток</th>
                    <th>6 суток</th>
                    <th>7 суток</th>
                    <th>каждый последующий день</th>
                    <th>30 суток</th>
                    <th>120 суток</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length === 0 ? (
                    <tr>
                      <td>Loading...</td>
                      <td>Loading...</td>
                    </tr>
                  ) : (
                    items.map((item, index) =>
                      item.fields.skiing.map((ski, indexd) => (
                        <tr key={indexd}>
                          <td>{ski.category}</td>
                          {ski.prices.map((price, idx) => (
                            <td key={idx}>{price} ₽</td>
                          ))}
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
            <p className={styles.toAccs}>
              Также в нашем прокате есть вся необходимая амуниция и защита для
              катания
              <span>
                <Link href="/clothes"> Подробнее</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.drawUp}>
            <Image
              className={styles.drawUpImg}
              src="/svg/ski-stick-man-svgrepo-com.svg"
              alt="BicycleImage"
              width={420}
              height={570}
            />
            <div className={styles.drawUpDocs}>
              <h3>Для аренды горных лыж потребуется</h3>
              <div className={styles.drawUpFlex}>
                <Image
                  src="/svg/id-svgrepo-com.svg"
                  alt="IdImage"
                  width={105}
                  height={110}
                />
                <div>
                  <h4>Паспорт</h4>
                  <p>
                    Для составления договора проката нам будет нужен ваш паспорт
                  </p>
                </div>
              </div>
              <div className={styles.drawUpFlex}>
                <Image
                  src="/svg/wallet-svgrepo-com.svg"
                  alt="WalletImage"
                  width={105}
                  height={110}
                />
                <div>
                  <h4>Залог (1 из 2-ух вариантов)</h4>
                  <p>
                    Документ (паспорт РФ, загранпаспорт, водительское
                    удостоверение, военный билет)
                  </p>
                  <p>
                    Денежный залог в размере 10000 рублей за комплект
                    оборудования
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ContactUs />
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Как выбрать горные лыжи?</h2>
            <div className={styles.choiceTop}>
              <div>
                <p>
                  Горные лыжи – это крайне обширный ассортимент снаряжения для
                  активного отдыха. При выборе нужно ориентироваться на
                  множество критериев, начиная от собственных навыков и
                  заканчивая тонкостями конструкции. Поможем разобраться с тем,
                  как выбрать оптимальный вариант для себя и своих условий.
                </p>
                <h5>
                  Начать подбор оснастки стоит с оценки стиля езды, то есть
                  нужно выбрать то, что больше всего привлекает:
                </h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Универсальный. Здесь может быть как целина, так и
                      подготовленная трасса
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Подготовленные спуски. Здесь трасса укатана, отратрачена
                      (подготовлена спецтехникой), снег плотный, часто
                      искусственный
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Спорт. Это активная и агрессивная динамичная езда по
                      подготовленным трассам
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Фрирайд. Неподготовленные склоны, целина, рыхлый снег
                      большой толщины
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Парк или фристайл. Это подготовленные склоны, трюки на
                      трамплинах, трубах и перилах
                    </span>
                  </li>
                </ul>
                <p>
                  В зависимости от этого начинается оценка прочих аспектов.
                  Кстати, новичкам стоит ориентироваться на универсалы, так как
                  они позволят лучше понять каждый указанный стиль и выбрать
                  свой.
                </p>
              </div>
              <Image
                className={styles.imageCover}
                src="/images/ski1.jpg"
                alt="SKI IMAGE"
                width={640}
                height={427}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Радиус выреза</h2>
            <div className={styles.choiceTop}>
              <div className={styles.choiceTopImages}>
                <Image
                  className={styles.imageCover}
                  src="/images/ski2.jpg"
                  alt="SKI IMAGE"
                  width={490}
                  height={169}
                />
                <Image
                  className={styles.imageCover}
                  src="/images/ski3.jpg"
                  alt="SKI IMAGE"
                  width={555}
                  height={370}
                />
              </div>
              <div>
                <p>
                  Боковой вырез – это дуга, которая оформлена на боковых
                  поверхностях инвентаря. Измеряется он в метрах и влияет на
                  радиус, по которому будет совершаться поворот при
                  маневрировании. То есть, чем меньше дуга, тем активнее можно
                  перекладываться на склоне.
                </p>
                <p>
                  При такой геометрии модель сможет резко менять направление
                  движения, будет в целом динамичнее. Опытный райдер сможет
                  работать с любой лыжей, но это потребует больше сил, чем
                  оптимальные углы и движения на соответствующем снаряжении.
                </p>
                <p>
                  Большая дуга обеспечивает плавную езду, лучше поддается
                  контролю на скорости.
                </p>
                <h5>Поведение на склоне:</h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Небольшим вырезом считается параметр в пределах 11-13
                      метров
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Заметно меняется поведение в сторону устойчивости на
                      больших вырезах – от 17 метров
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Масса</h2>
            <div className={styles.choiceTop}>
              <div>
                <p>
                  Данный показатель можно не учитывать до тех пор, пока вы не
                  соберетесь в ски-тур или не понадобится бить рекорды скорости.
                  Зависит значение от используемых материалов и технологий. При
                  скоростном спуске учитывается каждый грамм веса, но легкие
                  изделия предлагают в основном топовые производители,
                  использующие большое количество запатентованных методик и
                  технологий.
                </p>
                <p>
                  Легкие материалы очень дороги, как карбон. При длительных
                  переходах минимальная масса позволит сэкономить силы.
                </p>
                <p>
                  Очевидно, что для управления ими потребуется опыт для
                  достижения больших скоростей. Новичкам легкость поможет
                  освоиться с управлением, так как начинающие не развивают
                  больших скоростей.
                </p>
                <p>
                  Помимо конструкции, на вес влияют крепления. С ростом опыта
                  могут понадобиться и более тяжелые модели, так как они
                  стабильнее и простят райдеру ряд ошибок. При таком подходе
                  обеспечен интенсивный прогресс.
                </p>
                <h5>Масса комплекта с креплениями:</h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Для женщин используются более легкие изделия, в среднем
                      укомплектованная пара весит 4,5-5,5 кг
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Мужчинам нужен повышенный запас прочности, его получают за
                      счет массы. В среднем пара для представителей сильного
                      пола насчитывает 5-7 кг
                    </span>
                  </li>
                </ul>
                <p>
                  Для ряда стилей катания выпускаются утяжеленные изделия,
                  например, приспособленные для скоростных спусков по
                  неподготовленным склонам. Такие параметры позволяют уберечь
                  лыжи от повреждений, которые появляются при столкновении с
                  препятствиями, особенно скрытыми под снегом.
                </p>
              </div>
              <div className={styles.choiceTopImages}>
                <Image
                  className={styles.imageCover}
                  src="/images/ski4.jpg"
                  alt="Ski Image"
                  width={556}
                  height={980}
                />
                <div className={styles.border}></div>
                <p>
                  Помимо легкости, улучшается управляемость на спуске, но сбить
                  такое оснащение с курса значительно легче. Модели с
                  минимальным весом откликаются на любые неровности трассы,
                  могут легко уйти с намеченного курса.
                </p>
                <div className={styles.border}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Ширина</h2>
            <div className={styles.choiceTop}>
              <div className={styles.choiceTopImages}>
                <Image
                  className={styles.imageCover}
                  src="/images/ski5.jpg"
                  alt="Ski Image"
                  width={556}
                  height={740}
                />
                <div className={styles.border}></div>
                <p>
                  Так как от данного параметра зависит площадь контакта со
                  склоном, то он напрямую сказывается на вездеходных качествах.
                </p>
                <div className={styles.border}></div>
              </div>
              <div>
                <p>
                  Так как у горных лыж имеется вырез, то и ширина каждой
                  меняется в зависимости от участка измерения.
                </p>
                <h5>Обычно выделяют три сегмента:</h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>Носок</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Талия (самый узкий элемент)</span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>Пятка</span>
                  </li>
                </ul>
                <h5>Ширина:</h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      До 73 мм шириной лыжи способны эффективно ездить только по
                      подготовленным склонам. За счет узкой талии она лучше
                      входит в поворот, перекладывается на жестком, укатанном
                      снегу
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      В пределах 73-90 мм талию имеют универсальные модели. Они
                      могут рассекать подготовленные трассы и целину, но
                      добиться высоких скоростных показателей на них не удастся
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Более 90 мм – это фрирайдерское снаряжение, то есть лыжи
                      для диких склонов и рыхлого снега, в котором держатся
                      только за счет большой ширины скользяка
                    </span>
                  </li>
                </ul>
                <p>
                  Геометрию легко узнать по описанию из каталога, обычно
                  указывается три числа, например, 120/75/110. Это значит, что
                  носок имеет ширину 120 мм, талия – 75, а пятка – 110.
                </p>
                <p>
                  Чем больше разница между шириной носка и талией, тем лучше
                  снаряжение входит в поворот. Чем меньше ширина пятки, тем
                  легче они переходят в скольжение.
                </p>
                <p>
                  Скольжение пяток называют еще «сбросом», то есть, при
                  возникновении препятствия, необходимо поставить лыжи поперек
                  склона, что обеспечивается за счет лучшего скольжения пятки,
                  чем остальной поверхности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Жесткость</h2>
            <div className={styles.choiceTop}>
              <div>
                <p>
                  Для определения жесткости нет универсальной таблицы, потому
                  каждый производитель использует свои величины. Они позволяют
                  сравнить жесткости в пределах одной марки.
                </p>
                <p>
                  Обычно для начинающих лыжи значительно мягче, чем для более
                  продвинутых пользователей.
                </p>
                <h5>На параметр влияет множество характеристик:</h5>
                <ul>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Использованные материалы. Например, определенные породы
                      древесины обладают повышенной жесткостью или мягкостью,
                      чем больше металла в конструкции, тем сильнее плоскость
                      сопротивляется изгибу
                    </span>
                  </li>
                  <li>
                    <span>&#9673;</span>
                    <span>
                      Чем шире и массивнее изделие, тем больше рассматриваемый
                      аспект
                    </span>
                  </li>
                </ul>
                <p>
                  Эти пункты так же позволяют создавать изделия с неравномерной
                  жесткостью. Если необходимо оснащение для подготовленных
                  склонов, то параметры должны быть равными по всей длине.
                </p>
                <p>
                  Наиболее жесткие конструкции создаются из двух слоев металла,
                  закрывающих сердечник сверху и снизу. Мягче те, у которых
                  металл есть только снизу, наиболее мягкие, в которых
                  применяется карбон и стекловолокно.
                </p>
              </div>
              <div className={styles.choiceTopImages}>
                <Image
                  className={styles.imageCover}
                  src="/images/ski6.jpg"
                  alt="Ski Image"
                  width={556}
                  height={314}
                />
                <div className={styles.border}></div>
                <p>
                  Для универсального использования и покорения диких склонов
                  лучше подойдет мягкая носок/пятка с более твердой серединой.
                </p>
                <div className={styles.border}></div>
                <Image
                  className={styles.imageCover}
                  src="/images/ski7.jpg"
                  alt="Ski Image"
                  width={556}
                  height={314}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Ширина и Ростовка</h2>
            <div className={styles.choiceTop}>
              <Image
                className={styles.imageCover}
                src="/images/ski8.jpg"
                alt="Ski Image"
                width={556}
                height={494}
              />
              <div>
                <h5>Существует ряд общепринятых норм и значений:</h5>
                <ul>
                  <li>
                    <span>❉</span>
                    <span>
                      На международных соревнованиях по слалому все мужчины и
                      женщины используют лыжи одной длины, соответственно 165 и
                      155 см
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      Для трасс мужчины используют обычно 170-175 см, меньшую
                      дугу поворота гарантирует лыжа длиной не более 165 см
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      Женщины чаще катаются на моделях длиной 155-165 см
                    </span>
                  </li>
                </ul>
                <p>
                  Важно внести корректировки в зависимости от выбранного стиля.
                  Например, любителям карвинга и подготовленных склонов подойдут
                  изделия на 5-10 см короче усредненных величин.
                </p>
                <p>
                  Аналогичные подойдут для новичков, для коротких и пологих
                  спусков.
                </p>
                <p>
                  Увеличить длину на 5-10 см стоит, если предпочитаете длинные и
                  крутые подготовленные склоны, скоростную езду.
                </p>
                <p>
                  Еще больше лыжи нужны фрирайдерам, то есть любителям экстрима
                  на неподготовленных горках, в рыхлом снегу.
                </p>
                <p>
                  Что касается разделения на женщин и мужчин, то это скорее
                  условное значение. С учетом того, что женщины обычно ниже
                  ростом и меньше весят, конструкция снаряжения учитывает более
                  низкий центр тяжести и прорабатывается так, чтобы дать лучший
                  комфорт и удобство райдерам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Общие рекомендации</h2>
            <div className={styles.choiceTop}>
              <Image
                className={styles.imageCover}
                src="/images/ski9.jpg"
                alt="Ski Image"
                width={556}
                height={424}
              />
              <div>
                <p>Отдельное внимание стоит уделить ростовке.</p>
                <h5>
                  Модели, достающие вам до подбородка, стоит выбрать в следующих
                  случаях:
                </h5>
                <ul>
                  <li>
                    <span>❉</span>
                    <span>
                      Вы только начинаете осваивать горные лыжи или обладаете
                      средними навыками
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>Ваш вес ниже средних значений для роста</span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>Любите делать резкие повороты, короткими дугами</span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>Катаетесь только по подготовленным склонам</span>
                  </li>
                </ul>
                <h5>
                  Модели, соответствующие росту или даже большие подойдут, если:
                </h5>
                <ul>
                  <li>
                    <span>❉</span>
                    <span>Катаетесь быстро, дуги длинные</span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>Ваш вес выше среднестатистического</span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      Выбираете мощные лыжи для горных склонов и универсальных
                      спусков
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>Необходимы лыжи для паркового катания</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.choice}>
            <h2>Бренды</h2>
            <div className={styles.choiceTop}>
              <div>
                <h5>Наиболее распространенные марки:</h5>
                <ul>
                  <li>
                    <span>❉</span>
                    <span>
                      STOCKLI. Шведская фирма практически с вековой историей,
                      считается непревзойденным мастером по выпуску деревянных
                      лыж
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      SALOMON. Топовый французский бренд, на его счету десятки
                      запатентованных инноваций и технологий;
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      ATOMIC. Австрийский производитель, одни из лучших лыж, но
                      не самые дешевые;
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      FISCHER. Еще одна австрийская компания, стартовавшая, как
                      производитель бытового инвентаря. Несколько раз
                      становилась лучшим поставщиком снаряжения дл Олимпийских
                      игр;
                    </span>
                  </li>
                  <li>
                    <span>❉</span>
                    <span>
                      HEAD. Тоже Австрия, но в этом случае марка носит звание
                      наиболее технологичной.
                    </span>
                  </li>
                </ul>
                <p>Лучшие модели различных фирм в нашем прокате!</p>
              </div>
              <Image
                className={styles.imageCover}
                src="/images/sk10i.jpg"
                alt="Ski Image"
                width={556}
                height={424}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div style={{ marginBottom: "-10px" }}>
          <Map />
        </div>
      </section>
    </>
  );
};

export default Skiing;
