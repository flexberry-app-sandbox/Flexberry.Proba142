import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.информация-об-организации.caption'),
          title: i18n.t('forms.application.sitemap.информация-об-организации.title'),
          children: [{
            link: 'i-i-s-proba14-вакант-должн-l',
            caption: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-proba14-вакант-должн-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-proba14-вакант-должн-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-proba14-организация-l',
            caption: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-proba14-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-об-организации.i-i-s-proba14-организация-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документы.caption'),
          title: i18n.t('forms.application.sitemap.документы.title'),
          children: [{
            link: 'i-i-s-proba14-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-proba14-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-proba14-рег-результ-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-proba14-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-proba14-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-proba14-планир-собес-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-proba14-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-proba14-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-proba14-регист-анкеты-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.caption'),
          title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.title'),
          children: [{
            link: 'i-i-s-proba14-должн-сотр-l',
            caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-proba14-должн-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-proba14-должн-сотр-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-proba14-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-proba14-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-proba14-сотрудники-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})