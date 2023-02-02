import { cmsComponents } from '@/constants';
import CmsContactInfo from './CmsContactInfo';
import CmsRichText from './CmsRichText';

function ComponentSwitcher({ components }) {
  return (
    <>
      {components.map((component) => {

        switch (component.__component) {
          case cmsComponents.RICH_TEXT:
            return (
              <CmsRichText component={component} />
            )

          case cmsComponents.CONTACT_INFO:
            return (
              <CmsContactInfo component={component} />
            )

          default:
            return null
        }
      })}
    </>

  );
}

export default ComponentSwitcher;