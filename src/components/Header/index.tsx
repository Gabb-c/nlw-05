import Image from 'next/image';

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';

const Header: React.FC = (): JSX.Element => {
  const currentDate = format(new Date(), 'EEEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <Image src="/logo.svg" alt="Podcastr" width={163} height={40} />
      <p>The best for you to listen, always</p>
      <span>{currentDate}</span>
    </header>
  );
};

export default Header;
