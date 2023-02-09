import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return <div>{t('AboutPage.title')}</div>;
};

export default AboutPage;
