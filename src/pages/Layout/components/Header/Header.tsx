import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton'

const Header: FC = () => {
  const { i18n } = useTranslation()

  const changeLang = ({ value }: SelectButtonChangeEvent) => {
    i18n.changeLanguage(value)
  }

  return (
    <header className="border-bottom-1 py-2">
      <div className="container flex justify-content-end align-items-center">
        <SelectButton
          options={[
            { label: 'EN', value: 'en' },
            { label: 'RU', value: 'ru' },
          ]}
          value={i18n.language}
          onChange={changeLang}
        />
      </div>
    </header>
  )
}

export default Header
