/**
 * Created by e.kurbackaya on 06.09.2017.
 */

   $(document).on('click', '.lang', function() {
            $(".new-proj-lang").text(($(".new-proj-lang").text() == 'New Project') ? 'Новый Проект' : 'New Project');
            $(".projects-lang").text(($(".projects-lang").text() == 'Projects') ? 'Проекты' : 'Projects');
            $(".login-lang").text(($(".login-lang").text() == 'Login/Register') ? 'Вход/Регистрация' : 'Login/Register');
            $(".profile-lang").text(($(".profile-lang").text() == 'Profile') ? 'Профиль' : 'Profile');
            $(".setting-lang").text(($(".setting-lang").text() == 'Settings') ? 'Настройки' : 'Settings');
            $(".settings-lang").text(($(".settings-lang").text() == 'Settings') ? 'Настройки' : 'Settings');
            $(".sign-out-lang").text(($(".sign-out-lang").text() == 'Sign out') ? 'Выход' : 'Sign out');
            $(".sort-lang").text(($(".sort-lang").text() == 'Sort by ') ? 'Сортировать по ' : 'Sort by ');
            $(".prev-lang").text(($(".prev-lang").text() == 'Previous') ? 'Предыдущая' : 'Previous');
            $(".next-lang").text(($(".next-lang").text() == 'Next') ? 'Следующая' : 'Next');
            $(".sign-in-lang").text(($(".sign-in-lang").text() == 'Sign in') ? 'Войти' : 'Sign in');
            $(".sign-up-lang").text(($(".sign-up-lang").text() == 'Sign up') ? 'Зарегистрироваться' : 'Sign up');
            $(".register-lang").text(($(".register-lang").text() == 'Register') ? 'Зарегистрироваться' : 'Register');
            $(".forgot-pass-lang").text(($(".forgot-pass-lang").text() == 'Forgot Password?') ? 'Забыли пароль?' : 'Forgot Password?');
            $(".reset-pass-lang").text(($(".reset-pass-lang").text() == 'Reset password') ? 'Восстановить пароль' : 'Reset password');
            $(".update-pass-lang").text(($(".update-pass-lang").text() == 'Update password') ? 'Сменить пароль' : 'Update password');
            $(".update-avatar-lang").text(($(".update-avatar-lang").text() == 'Update avatar') ? 'Сменить аватар' : 'Update avatar');
            $(".avatar-lang").text(($(".avatar-lang").text() == 'Avatar') ? 'Аватар' : 'Avatar');
            $(".fund-proj-lang").text(($(".fund-proj-lang").text() == 'Fund this project') ? 'Профинансировать проект' : 'Fund this project');
            $(".fund-goal-lang").text(($(".fund-goal-lang").text() == 'Funding goal') ? 'Цель проекта' : 'Funding goal');
            $(".days-left-lang").text(($(".days-left-lang").text() == 'Days left') ? 'Осталось дней' : 'Days left');
            $(".location-lang").text(($(".location-lang").text() == 'Location') ? 'Место' : 'Location');
            $(".progress-lang").text(($(".progress-lang").text() == 'Progress') ? 'Прогресс' : 'Progress');
            $(".backers-lang").text(($(".backers-lang").text() == 'Backers') ? 'Спонсоров' : 'Backers');
            $(".rewards-lang").text(($(".rewards-lang").text() == 'Rewards') ? 'Вознаграждения' : 'Rewards');
            $(".pledged-lang").text(($(".pledged-lang").text() == 'pledged') ? 'собрано' : 'pledged');
            $(".votes-lang").text(($(".votes-lang").text() == 'votes') ? 'голосов' : 'votes');
            $(".edit-lang").text(($(".edit-lang").text() == 'Edit') ? 'Редактировать' : 'Edit');
            $(".delete-lang").text(($(".delete-lang").text() == 'Delete') ? 'Удалить' : 'Delete');
            $(".published-lang").text(($(".published-lang").text() == 'Published on:') ? 'Опубликовано:' : 'Published on:');
            $(".similar-proj-lang").text(($(".similar-proj-lang").text() == 'Similar Projects') ? 'Похожие проекты' : 'Similar Projects');
            $(".similar-ideas-lang").text(($(".similar-ideas-lang").text() == 'Similar Ideas') ? 'Похожие идеи' : 'Similar Ideas');
            $(".write-comm-lang").text(($(".write-comm-lang").text() == 'Write a comment') ? 'Написать комментарий' : 'Write a comment');
            $(".comment-lang").text(($(".comment-lang").text() == 'Comment') ? 'Отправить' : 'Comment');
            $(".change-pass-lang").text(($(".change-pass-lang").text() == 'Change password') ? 'Изменить пароль' : 'Change password');
            $(".new-project-lang").text(($(".new-project-lang").text() == 'New Project ') ? 'Новый проект ' : 'New Project ');
            $(".title-lang").text(($(".title-lang").text() == 'Title') ? 'Название' : 'Title');
            $(".blurb-lang").text(($(".blurb-lang").text() == 'Blurb') ? 'Объявление' : 'Blurb');
            $(".proj-img-lang").text(($(".proj-img-lang").text() == 'Project Image') ? 'Изображение' : 'Project Image');
            $(".details-lang").text(($(".details-lang").text() == 'Details') ? 'Детали' : 'Details');
            $(".permal-lang").text(($(".permal-lang").text() == 'Permalink') ? 'Уникальная ссылка' : 'Permalink');
            $(".tags-lang").text(($(".tags-lang").text() == 'Tags') ? 'Тэги' : 'Tags');
            $(".duration-lang").text(($(".duration-lang").text() == 'Duration') ? 'Срок сдачи' : 'Duration');
            $(".cancel-lang").text(($(".cancel-lang").text() == 'Cancel') ? 'Закрыть' : 'Cancel');
            $(".done-lang").text(($(".done-lang").text() == 'Done') ? 'Сохранить' : 'Done');
            $(".fund-lang").text(($(".fund-lang").text() == 'Funding') ? 'Цель' : 'Funding');
            $(".days-go-lang").text(($(".days-go-lang").text() == 'Days to go') ? 'Осталось дней ' : 'Days to go');
            $(".amount-lang").text(($(".amount-lang").text() == 'Amount Pledged') ? 'Собрано всего' : 'Amount Pledged');
            $(".light-bg-lang").text(($(".light-bg-lang").text() == 'Light Background') ? 'Светлый фон' : 'Light Background');
            $(".dark-bg-lang").text(($(".dark-bg-lang").text() == 'Dark Background') ? 'Темный фон' : 'Dark Background');
            $(".ginger-bg-lang").text(($(".ginger-bg-lang").text() == 'Ginger Background') ? 'Рыжий фон' : 'Ginger Background');


       $(".eng").text(($(".eng").text() == 'EN') ? 'RU' : 'EN');

            if ($(this).hasClass('rus')) {
                return $(this).removeClass('rus');
            } else {
                return $(this).addClass('rus');
            }

        });

