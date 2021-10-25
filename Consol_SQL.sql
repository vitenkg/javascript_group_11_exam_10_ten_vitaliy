create schema exam_10 collate utf8_general_ci;

use exam_10;

create table news (
    id int auto_increment,
    title varchar(255) not null ,
    text text not null,
    date timestamp default current_timestamp,
    image varchar(255) null,
    constraint news_pk
    primary key (id)
);

select * from news;

create table comments
(
    id int auto_increment,
    news_id int not null,
    name varchar(255) not null,
    comment text not null,
    constraint comments_pk
    primary key (id),
    constraint comments_news_id_fk
    foreign key (news_id) references news(id)
    on update cascade on delete cascade
);

select * from comments;

insert into news (title, text, image)
VALUES ('News 1', 'Американская администрация пообещала обнародовать 15 декабря текущего года новые сведения об убийстве в 1963 году президента США Джона Кеннеди, сообщает ТАСС со ссылкой на заявление Белого дома. Об этом сообщает "Рамблер".', null),
       ('News 2', 'В проведенном Ойибо исследовании приняли участие 669 добровольцев. Их попросили оценить, насколько их мотивируют начать делать упражнения с помощью специального фитнес-приложения  пять различных информационных сообщений. Сообщения нужно было ранжировать по шкале от одного до семи, где один означает «сообщение совсем не мотивирует меня начать или продолжить тренировки», а семь — «сообщение полностью мотивирует меня начать или продолжить тренировки».', null),
       ('News 3', 'Первое из них касалось финансов и информировало участников о том, что низкая физическая активность населения ежегодно обходится канадским налогоплательщикам почти в семь миллиардов долларов. Второе касалось ожирения и сообщало, что от него страдает каждый четвертый канадец.  В третьем речь шла о смерти — согласно статистике Всемирной организации здравоохранения, шесть процентов смертей во всем мире связано с сидячим образом жизни.', null);


insert into comments (news_id, name, comment)
VALUES (1, 'Anonymous', 'Comment 1'),
       (1, 'Anonymous', 'Comment 2'),
       (1, 'Anonymous', 'Comment 3'),
       (2, 'Anonymous', 'Comment 1'),
       (2, 'Anonymous', 'Comment 2'),
       (3, 'Anonymous', 'Comment 1'),
       (3, 'Anonymous', 'Comment 2'),
       (5, 'Anonymous', 'Comment 1');

select * from comments;

select * from comments where news_id = 3;