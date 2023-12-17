import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProba14ВакантДолжнLForm from './forms/i-i-s-proba14-вакант-должн-l';
import IISProba14ДолжнСотрLForm from './forms/i-i-s-proba14-должн-сотр-l';
import IISProba14ОрганизацияLForm from './forms/i-i-s-proba14-организация-l';
import IISProba14ПланирСобесLForm from './forms/i-i-s-proba14-планир-собес-l';
import IISProba14РегРезультLForm from './forms/i-i-s-proba14-рег-результ-l';
import IISProba14РегистАнкетыLForm from './forms/i-i-s-proba14-регист-анкеты-l';
import IISProba14СотрудникиLForm from './forms/i-i-s-proba14-сотрудники-l';
import IISProba14ВакантДолжнEForm from './forms/i-i-s-proba14-вакант-должн-e';
import IISProba14ДолжнСотрEForm from './forms/i-i-s-proba14-должн-сотр-e';
import IISProba14ОрганизацияEForm from './forms/i-i-s-proba14-организация-e';
import IISProba14ПланирСобесEForm from './forms/i-i-s-proba14-планир-собес-e';
import IISProba14РегРезультEForm from './forms/i-i-s-proba14-рег-результ-e';
import IISProba14РегистАнкетыEForm from './forms/i-i-s-proba14-регист-анкеты-e';
import IISProba14СотрудникиEForm from './forms/i-i-s-proba14-сотрудники-e';
import IISProba14ВакантДолжнModel from './models/i-i-s-proba14-вакант-должн';
import IISProba14ДолжнСотрModel from './models/i-i-s-proba14-должн-сотр';
import IISProba14ОрганизацияModel from './models/i-i-s-proba14-организация';
import IISProba14ПланирСобесModel from './models/i-i-s-proba14-планир-собес';
import IISProba14РегРезультModel from './models/i-i-s-proba14-рег-результ';
import IISProba14РегистАнкетыModel from './models/i-i-s-proba14-регист-анкеты';
import IISProba14СотрудникиModel from './models/i-i-s-proba14-сотрудники';
import IISProba14ТЧРегРезультModel from './models/i-i-s-proba14-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba14-вакант-должн': IISProba14ВакантДолжнModel,
    'i-i-s-proba14-должн-сотр': IISProba14ДолжнСотрModel,
    'i-i-s-proba14-организация': IISProba14ОрганизацияModel,
    'i-i-s-proba14-планир-собес': IISProba14ПланирСобесModel,
    'i-i-s-proba14-рег-результ': IISProba14РегРезультModel,
    'i-i-s-proba14-регист-анкеты': IISProba14РегистАнкетыModel,
    'i-i-s-proba14-сотрудники': IISProba14СотрудникиModel,
    'i-i-s-proba14-т-ч-рег-результ': IISProba14ТЧРегРезультModel
  },

  'application-name': 'Menu',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Menu',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Menu',
          title: 'Menu'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'информация-об-организации': {
          caption: 'Информация об организации',
          title: 'Информация об организации',
          'i-i-s-proba14-вакант-должн-l': {
            caption: 'Вакантная должность',
            title: ''
          },
          'i-i-s-proba14-организация-l': {
            caption: 'Организация',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-proba14-рег-результ-l': {
            caption: 'Регистрация результатов собеседования',
            title: 'Регистрация результатов собеседования'
          },
          'i-i-s-proba14-планир-собес-l': {
            caption: 'Планирование собеседования',
            title: 'Планирование собеседования'
          },
          'i-i-s-proba14-регист-анкеты-l': {
            caption: 'Регистрация анкеты кандидата',
            title: 'Регистрация анкеты кандидата'
          }
        },
        'информация-о-сотрудниках': {
          caption: 'Информация о сотрудниках',
          title: 'Информация о сотрудниках',
          'i-i-s-proba14-должн-сотр-l': {
            caption: 'Должность сотрудника',
            title: 'Должность сотрудника'
          },
          'i-i-s-proba14-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba14-вакант-должн-l': IISProba14ВакантДолжнLForm,
    'i-i-s-proba14-должн-сотр-l': IISProba14ДолжнСотрLForm,
    'i-i-s-proba14-организация-l': IISProba14ОрганизацияLForm,
    'i-i-s-proba14-планир-собес-l': IISProba14ПланирСобесLForm,
    'i-i-s-proba14-рег-результ-l': IISProba14РегРезультLForm,
    'i-i-s-proba14-регист-анкеты-l': IISProba14РегистАнкетыLForm,
    'i-i-s-proba14-сотрудники-l': IISProba14СотрудникиLForm,
    'i-i-s-proba14-вакант-должн-e': IISProba14ВакантДолжнEForm,
    'i-i-s-proba14-должн-сотр-e': IISProba14ДолжнСотрEForm,
    'i-i-s-proba14-организация-e': IISProba14ОрганизацияEForm,
    'i-i-s-proba14-планир-собес-e': IISProba14ПланирСобесEForm,
    'i-i-s-proba14-рег-результ-e': IISProba14РегРезультEForm,
    'i-i-s-proba14-регист-анкеты-e': IISProba14РегистАнкетыEForm,
    'i-i-s-proba14-сотрудники-e': IISProba14СотрудникиEForm
  },

});

export default translations;
