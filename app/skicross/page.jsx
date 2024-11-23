"use client";
import client from "@/app/contentful";
//NEXT
import Image from "next/image";
import Link from "next/link";
//Components
import { Map } from "../components/Map";
import { ContactUs } from "../components/ContactUs";

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

const SkiCross = async () => {
  const items = await getData();
  return (
    <>
      <div>
        <section>
          <div className="container">
            <div>
              <div className={styles.bicycleContainer}>
                <h2>Прокат беговых лыж</h2>
              </div>
              <div className={styles.tableContainer}>
                <table className={styles.winter} border="1">
                  <thead>
                    <tr>
                      <th>Сутки</th>
                      <th>12ч</th>
                      <th>1 суток</th>
                      <th>2 суток</th>
                      <th>3 суток</th>
                      <th>7 суток</th>
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
                        item.fields.crossSki.map((ski, indexd) => (
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
                src="/svg/ski-svgrepo-com.svg"
                alt="BicycleImage"
                width={420}
                height={570}
              />
              <div className={styles.drawUpDocs}>
                <h3>Для аренды беговых лыж потребуется</h3>
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
                      Для составления договора проката нам будет нужен ваш
                      паспорт
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
                      Денежный залог в размере 5000 рублей за комплект
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
              <h2>Как выбрать беговые лыжи?</h2>
              <div className={styles.choiceTop}>
                <div>
                  <p>
                    Выбор снаряжения для различных видов спорта требует
                    взвешенного подхода. Необходимо учитывать множество
                    факторов, так как каждый из них влияет на поведение
                    оснащения на склоне. Предлагаем оценить основные аспекты
                    беговых лыж, чтобы избежать проблем при их покупке.
                  </p>
                  <h5>При покупке снаряжения учитывается 3 главных фактора:</h5>
                  <ul>
                    <li>
                      <span>&#9673;</span>
                      <span>Ростовка</span>
                    </li>
                    <li>
                      <span>&#9673;</span>
                      <span>Стиль езды</span>
                    </li>
                    <li>
                      <span>&#9673;</span>
                      <span>Вес лыжника</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div>
                    <Image
                      className={styles.imageCover}
                      src="/images/cross1.jpg"
                      alt="CROSS SKI IMAGE"
                      width={555}
                      height={360}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.choice}>
              <h2>Стиль</h2>
              <div className={`${styles.choiceTop} ${styles.choiceReverse}`}>
                <div
                  className={`${styles.choiceTopImages} ${styles.choiceReverseImage}`}
                >
                  <Image
                    className={styles.imageCover}
                    src="/images/cross2.jpg"
                    alt="CROSS SKI IMAGE CHARACTERS"
                    width={555}
                    height={360}
                  />
                  <Image
                    className={styles.imageCover}
                    src="/images/cross3.jpg"
                    alt="CROSS SKI IMAGE"
                    width={555}
                    height={360}
                  />

                  <p className={styles.tacLeft}>
                    Помимо узкоспециализированных моделей для каждого стиля,
                    есть универсалы, способные эффективно работать в любом
                    режиме
                  </p>
                  <p className={styles.tacLeft}>
                    Для классического перемещения лучше подойдут длинные модели,
                    так как метод движения исключает перекрещивание ног, а
                    значит не нужно бояться случайных ударов
                  </p>
                  <p className={styles.tacLeft}>
                    При коньковом ходе траектории лыж пересекаются, потому лучше
                    себя проявляют короткие изделия
                  </p>
                  <p className={styles.tacLeft}>
                    Комбинированные больше напоминают классические, но на
                    скользяке нет насечек. Для их эксплуатации понадобятся
                    различные парафины
                  </p>
                </div>
                <div>
                  <h5>
                    Для начала нужно определиться со стилем катания, существует
                    два варианта:
                  </h5>
                  <ul>
                    <li>
                      <span>&#9673;</span>
                      <span>Классический ход</span>
                    </li>
                    <li>
                      <span>&#9673;</span>
                      <span>Коньковый ход</span>
                    </li>
                  </ul>
                  <p>
                    Первый вариант уходит корнями в историю, такой метод
                    использовали наши предки века назад. При этом обе лыжи стоят
                    параллельно и скользят одновременно
                  </p>
                  <p>
                    Один из вариантов классики – даблполинг. В этом случае
                    толчок совершается исключительно руками, ноги не
                    задействуются. Чтобы эффективно и длительное время
                    передвигаться таким способом, нужно иметь хорошую физическую
                    подготовку. В процессе больше всего прорабатываются мышцы
                    спины, пресса и рук. Даблполинг является довольно новым
                    принципом перемещения, но уже завоевал популярность среди
                    спортсменов и любителей разных уровней. Кстати, в этом
                    случае не используется смазка для скользящей поверхности
                  </p>
                  <p>
                    Коньковый ход появился только в прошлом веке – в 80-х. Его
                    впервые использовал финский лыжник на соревнованиях,
                    совершая толчок одной ногой, пока вторая оставалась в лыжне.
                    Спустя пару лет техника преобразилась до современного вида
                  </p>
                  <p>
                    Классика проще в освоении, для нее достаточно узкой лыжни,
                    которая не подготовлена. Коньковый метод требует
                    подготовленной трассы, увеличенных затрат энергии и
                    отработанной техники. Преимущество его в том, что он
                    позволяет развить значительно большую скорость
                  </p>
                  <Image
                    className={styles.imageCover}
                    src="/images/cross4.jpeg"
                    alt="CROSS SKI IMAGE"
                    width={555}
                    height={360}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.choice}>
              <h2>Конструктивные особенности</h2>
              <div className={styles.choiceTop}>
                <div>
                  <p>
                    Изначально материалом для лыж была древесина, но сейчас она
                    практически полностью вытеснена полимерами. В основном
                    современные модели состоят из пластика, синтетики и
                    композитов, углеволокна, а дерево используется в основном
                    для сердечника
                  </p>
                  <p>
                    Каждый бренд применяет свои запатентованные технологические
                    решения. Необходимо достичь баланса по минимальному весу
                    лыжи, создать эффективное скольжение и сцепление с
                    поверхностью, добиться высокой прочности и гашения вибраций
                  </p>
                  <h5>
                    Скользящая сторона или скользяк, на который идет опора
                    оснастки, бывает двух типов:
                  </h5>
                  <ul>
                    <li>
                      <span>&#9673;</span>
                      <span>Гладкая</span>
                    </li>
                    <li>
                      <span>&#9673;</span>
                      <span>С насечками</span>
                    </li>
                  </ul>
                  <p>
                    Рифление необходимо для того, чтобы исключить откат назад
                    при толчке. В основном такую форму имеют дешевые лыжи для
                    классического хода. За счет нее можно избежать использования
                    держащих мазей под колодкой.
                  </p>
                  <p>
                    Более дорогие модели «классики» могут оснащаться съемной
                    площадкой, которую при необходимости фиксируют под колодкой.
                    Ее поверхность в основном покрыта ворсом, либо
                    искусственным, либо натуральным.
                  </p>
                  <p>
                    Лыжи топового сегмента, рассчитанные на профессионалов,
                    оснащаются гладким скользяком по всей длине. Чтобы комфортно
                    на них кататься, придется использовать держащие смазки.
                  </p>
                </div>
                <Image
                  className={styles.imageCover}
                  src="/images/cross5.jpeg"
                  alt="CROSS SKI IMAGE"
                  width={555}
                  height={741}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.choice}>
              <h2>Ростовка</h2>
              <div className={`${styles.choiceTop} ${styles.choiceReverse}`}>
                <div>
                  <Image
                    className={styles.imageCover}
                    src="/images/cross6.jpg"
                    alt="CROSS SKI IMAGE"
                    width={512}
                    height={512}
                  />
                </div>

                <div>
                  <p>
                    В зависимости от стиля езды подбирается длина оснащения, то
                    есть ростовка.
                  </p>
                  <h5>
                    Простейший метод выбора подразумевает сравнение изделий с
                    собственным ростом:
                  </h5>
                  <ul>
                    <li>
                      <span>&#9673;</span>
                      <span>
                        «Классика». Должны быть выше вашего роста на 25-30 см
                      </span>
                    </li>
                    <li>
                      <span>&#9673;</span>
                      <span>«Коньки». Должны быть выше на 10-15 см</span>
                    </li>
                    <li>
                      <span>&#9673;</span>
                      <span>«Универсалы». Выше на 15-25 см</span>
                    </li>
                  </ul>
                  <p>
                    Например, универсальные модели для человека ростом 1,8 м
                    составляют 200-205 см, классика – 205, а коньковые –
                    190-195.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.choice}>
              <h2>Зависимость от массы</h2>
              <div className={styles.choiceTop}>
                <div>
                  <p>
                    Важно правильно подобрать оснащение по массе, то есть
                    выбрать ту жесткость, при которой лыжа будет принимать
                    оптимальное положение под нагрузкой от лыжника. Алгоритм
                    прост: чем тяжелее спортсмен, тем жестче должно быть
                    снаряжение.
                  </p>
                  <p>
                    По данному параметру есть зависимость со стоимостью. Так в
                    доступном сегменте (до 5 тысяч рублей) вариантов жесткости
                    мало, обычно они мало отличаются друг от друга поведением на
                    склоне. Такое оснащение позволит оценить своим возможности и
                    интерес к данному виду активного отдыха.
                  </p>
                  <p>
                    Более дорогие модели представлены широким разбросом по
                    жесткости. Они нацелены на опытных райдеров, которые уже
                    знают, что им нужно.
                  </p>
                  <h5>Существует 2 метода жесткости:</h5>
                  <p>
                    Начнем с того, который требует участия второго человека. В
                    этом случае нужно уложить лыжи скользящей поверхностью на
                    пол, необходимо найти ровное, твердое покрытие. Далее
                    проверяется каждая лыжа по отдельности.
                    <b>
                      Их нужно одеть и проверить оставшийся просвет под колодкой
                      при помощи листка бумаги, двигая его от центра ноги
                      вперед/назад:
                    </b>
                  </p>
                  <ul>
                    <li>
                      <span>&#9673;</span>
                      <span>
                        Если лист не лезет, значит модель чрезмерно мягкая
                      </span>
                    </li>
                    <li>
                      <span>&#9673;</span>
                      <span>
                        Свободное движение при нагрузке на обе лыжи должно быть
                        в пределах 60-75 см от пятки ботинка к носу
                      </span>
                    </li>
                    <li>
                      <span>&#9673;</span>
                      <span>
                        При нагрузке на одну ногу, если под колодкой лист
                        оказывается зажатым, значит жесткость верно подобрана
                        для классического хода
                      </span>
                    </li>
                    <li>
                      <span>&#9673;</span>
                      <span>
                        При нагрузке на одну ногу у коньковой модели, листок
                        должен свободно вытаскиваться или иметь небольшой
                        свободный ход
                      </span>
                    </li>
                  </ul>
                  <div>
                    <Image
                      className={styles.imageCover}
                      src="/images/cross9.jpg"
                      alt="CROSS SKI IMAGE"
                      width={585}
                      height={585}
                    />
                  </div>
                </div>
                <div className={styles.choiceTopImages}>
                  <div>
                    <Image
                      className={styles.imageCover}
                      src="/images/cross7.jpg"
                      alt="CROSS SKI IMAGE"
                      width={555}
                      height={185}
                    />
                    <Image
                      className={styles.imageCover}
                      src="/images/cross8.jpg"
                      alt="CROSS SKI IMAGE"
                      width={555}
                      height={555}
                    />
                  </div>

                  <p className={styles.tacLeft}>
                    Более простой метод не дает такой точности, но подойдет для
                    новичков. В этом случае две лыжи из пары укладываются
                    скользяком к скользяку, на 3 сантиметра ниже центра их
                    сжимают одной кистью. Классика должна сохранять зазор в
                    пределах 1-1,5 мм, коньковые традиционно жестче – 1,5-2 мм.
                  </p>
                  <h5 className={styles.tacLeft}>
                    Не помешает так же визуальный осмотр:
                  </h5>
                  <ul>
                    <li className={styles.tacLeft}>
                      <span>&#9673;</span>
                      <span>
                        Центр тяжести должен быть одинаковым, допускаются
                        смещения не более 1,5 см
                      </span>
                    </li>
                    <li className={styles.tacLeft}>
                      <span>&#9673;</span>
                      <span>Сжатие происходит равномерно</span>
                    </li>
                    <li className={styles.tacLeft}>
                      <span>&#9673;</span>
                      <span>
                        В продольном направлении деформации исключены, то есть
                        желобок должен быть прямолинейным
                      </span>
                    </li>
                    <li className={styles.tacLeft}>
                      <span>&#9673;</span>
                      <span>
                        Скользяк ровный, без вмятин и прогибов, исключаются
                        дефекты
                      </span>
                    </li>
                  </ul>
                  <p className={styles.tacLeft}>
                    Если выбранная модель соответствует этим пунктам, то можно
                    смело приобретать.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.choice}>
              <h2>Палки</h2>
              <div className={`${styles.choiceTop} ${styles.choiceReverse}`}>
                <div>
                  <Image
                    className={styles.imageCover}
                    src="/images/cross10.jpg"
                    alt="CROSS SKI IMAGE"
                    width={555}
                    height={450}
                  />
                  <Image
                    className={styles.imageCover}
                    src="/images/cross11.jpg"
                    alt="CROSS SKI IMAGE"
                    width={555}
                    height={290}
                  />
                </div>
                <div>
                  <p>
                    Стоит сразу приобрести палки для выбранных лыж, они
                    необходимы для нескольких задач, как поддержание равновесия
                    и получение дополнительного импульса при отталкивании.
                  </p>
                  <h5>Выбор состоит в оценке 3 аспектов:</h5>
                  <ul>
                    <li>
                      <span>❉</span>
                      <span>Длина</span>
                    </li>
                    <li>
                      <span>❉</span>
                      <span>Изгиб</span>
                    </li>
                    <li>
                      <span>❉</span>
                      <span>Диаметр кольца</span>
                    </li>
                  </ul>
                  <p>
                    Для выпуска производители применяют различные материалы.
                    Алюминий может выдержать серьезное давление, но при
                    превышении допустимых значений изгибается, после чего
                    сохраняет форму или вообще может сломаться. Композиты сразу
                    ломаются при высокой нагрузке. Стеклопластик/углепластик
                    тоже ломкий, чаще всего повреждения проявляются при
                    случайных надрезах кантами лыж.
                  </p>
                  <p>
                    Изгиб на палках обычно соответствует скоростным спускам, для
                    которых важен каждый импульс и скорость. Профессиональные
                    изделия изогнуты сразу в трех плоскостях, что позволяет их
                    плотно прижать к телу во время скольжения, минимизируя
                    сопротивление воздуха.
                  </p>
                  <p>
                    Конструкция палки проста: стержень, острие внизу,
                    ограничитель выше острия, кольцо для удержания на руке.
                  </p>
                  <p>
                    Важно правильно подобрать ростовку, чтобы добиться
                    равновесия и исключить перегрузки тела. Для этого становятся
                    на лыжу в обуви, острием палку упирают в пол и держат, в
                    таком положении предплечье с плечом должны находиться под
                    прямым углом.
                  </p>
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
                  <p>
                    Современные производители выпускают обширный ассортимент,
                    рассчитанный на любой достаток и профессиональный уровень
                    райдера. Разумеется, топовые марки делают приличную наценку
                    на свои изделия, потому на первых этапах их можно избежать
                    для экономии.
                  </p>
                  <p>
                    Часто можно услышать негативные отзывы о китайских изделиях,
                    они достаточно ломкие и часто встречаются бракованные. Они
                    самые доступные в сегменте, но расценивать их, как серьезный
                    инвентарь, не стоит.
                  </p>
                  <h5>Вот наиболее распространенные и востребованные марки:</h5>
                  <ul>
                    <li>
                      <span>❉</span>
                      <span>
                        ATEMI. Это не столько производитель, сколько перекупщик
                        китайских изделий. Качество невысокое, но привлекает
                        цена;
                      </span>
                    </li>
                    <li>
                      <span>❉</span>
                      <span>
                        LARSEN. Финская продукция демонстрирует наиболее
                        демократичное сочетание цены и качества;
                      </span>
                    </li>
                    <li>
                      <span>❉</span>
                      <span>
                        NORDWAY. Российская марка, хорошая цена, но не всегда
                        качественные модели;
                      </span>
                    </li>
                    <li>
                      <span>❉</span>
                      <span>
                        TISA. Некогда топовая австрийская компания, сейчас
                        занимает позиции твердого середнячка;
                      </span>
                    </li>
                    <li>
                      <span>❉</span>
                      <span>
                        DYNAMIC. Австрийский бренд, хорошее качество и
                        приемлемая стоимость.
                      </span>
                    </li>
                  </ul>
                  <p>
                    Предлагаем качественный инвентарь в аренду на
                    привлекательных условиях!
                  </p>
                </div>
                <div>
                  <Image
                    className={styles.imageCover}
                    src="/images/cross12.jpg"
                    alt="CROSS SKI IMAGE"
                    width={555}
                    height={830}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <div style={{ marginBottom: "-10px" }}>
            <Map />
          </div>
        </section>
      </div>
    </>
  );
};

export default SkiCross;
