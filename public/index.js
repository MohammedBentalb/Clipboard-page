import logo from './images/logo.svg';
import headerDesktop from './images/bg-header-desktop.png';
import headerMobile from './images/bg-header-mobile.png';
import computer from './images/image-computer.png';
import device from './images/image-devices.png';
import list from './images/icon-blacklist.svg';
import ai from './images/icon-text.svg';
import eye from './images/icon-preview.svg';
import google from './images/logo-google.png';
import ibm from './images/logo-ibm.png';
import microsoft from './images/logo-microsoft.png';
import hp from './images/logo-hp.png';
import vectorGraphics from './images/logo-vector-graphics.png';
import twitter from './images/icon-twitter.svg'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'

const secondSectionInfo = [
  {
    title: 'Quick Search',
    data: 'Easily search your snippets by content, category, web address, application, and more.',
  },
  {
    title: 'iCloud Sync',
    data: 'Instantly saves and syncs snippets across all your devices.',
  },
  {
    title: 'Complete History',
    data: 'Retrieve any snippets from the first moment you started using the app.',
  },
];

const fourthSectionInfo = [
  {
    image: list,
    title: 'Create blacklists',
    paragraph:
      'Ensure sensitive information never makes its way to your clipboard by excluding certain sources.',
  },
  {
    image: ai,
    title: 'Plain text snippets',
    paragraph:
      'Remove unwanted formatting from copied text for a consistent look.',
  },
  {
    image: eye,
    title: 'Sneak preview',
    paragraph:
      'Quick preview of all snippets on your Clipboard for easy access.',
  },
];

const companies = [google, ibm, microsoft, hp, vectorGraphics];

export {
  logo,
  headerDesktop,
  headerMobile,
  secondSectionInfo,
  computer,
  device,
  fourthSectionInfo,
  companies,
  twitter,
  facebook,
  instagram
};
