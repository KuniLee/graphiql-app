import { FC } from 'react'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { ERoutes } from '@/router'

const WelcomePage: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <Button
        label="Sign In"
        onClick={() => {
          navigate(ERoutes.Auth)
        }}
      />
      <div style={{ fontSize: '20px', maxWidth: '500px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut delectus expedita facere iusto laborum
        officiis omnis placeat quis, ratione sed sint sunt vitae? Illo quia sapiente sequi vitae voluptate! Accusamus
        asperiores consequuntur eveniet mollitia neque! Accusamus adipisci alias cupiditate eligendi excepturi fugit
        quis reiciendis tempore veniam voluptatum? Doloribus est facere itaque nostrum sequi. Accusantium ad amet
        blanditiis consequatur culpa dicta eveniet ipsam iusto modi nam nemo nesciunt odio, optio quasi repellendus,
        velit veritatis! Aliquam aliquid, at culpa cum eaque eius harum quo reiciendis saepe veniam! Commodi consectetur
        consequatur dolores excepturi iusto libero quis quo sit unde ut? Accusantium beatae consequuntur cum doloremque
        dolores, doloribus enim explicabo fugiat in iste laudantium magnam, nulla provident quisquam temporibus! A ad
        blanditiis consequatur culpa dolor ducimus error facilis hic illo inventore ipsam iste labore magnam minima modi
        molestiae non odio odit officia possimus quae quam, quo repellendus ut velit voluptates voluptatum! Aut corporis
        enim necessitatibus perferendis porro qui quos sapiente soluta veritatis voluptatem? Dignissimos fugiat illo
        illum magni minus necessitatibus totam voluptatibus! A alias at aut distinctio dolor doloribus eius harum iste,
        iure minima natus nisi quasi recusandae repellendus sunt suscipit tempora voluptatibus? Amet at culpa dolor
        error est eum hic inventore iusto necessitatibus nesciunt odit perferendis quasi quia rerum saepe, similique,
        veniam. Ab amet commodi consectetur, consequuntur cum doloremque dolorum est, labore maxime repellat
        reprehenderit rerum ut voluptas? Accusamus atque dolores illum itaque molestias mollitia provident sapiente
        suscipit veniam! A accusantium aperiam aspernatur beatae blanditiis consectetur mollitia neque, nesciunt nobis
        odit perferendis quam quasi quod reprehenderit sapiente sunt voluptatum. Ad debitis facere facilis, labore ut
        voluptas voluptatum. Asperiores assumenda at blanditiis commodi consectetur cum, dolores eum laudantium minus
        molestiae nulla numquam officiis placeat quo quod veritatis vero voluptates? Aut dignissimos iste itaque iure
        iusto labore minus mollitia optio quibusdam vitae. Accusantium cumque eum ex. Accusamus alias amet architecto at
        beatae deleniti earum facere fugiat harum, incidunt libero minima nam, necessitatibus neque nesciunt non
        obcaecati pariatur perspiciatis provident saepe. Hic magnam mollitia quas quo soluta voluptatibus. Ab alias
        delectus doloribus labore laborum placeat quas rem! A accusamus alias asperiores at delectus dolorem doloribus,
        ea eaque eius enim ex explicabo fugiat illum iure laudantium libero minima modi nihil nulla, optio quae quaerat
        quam qui quisquam recusandae rem repudiandae rerum sequi totam veritatis vitae voluptatem voluptatibus
        voluptatum! Ab accusantium ad amet aut, autem beatae commodi cum cupiditate deleniti dolores error ex explicabo,
        ipsa labore libero magnam modi natus non odit officiis optio quaerat quasi quo quos sit tempore, unde
        voluptates! Eaque earum illo ipsum itaque modi molestiae nesciunt nostrum quaerat recusandae, soluta. Accusamus
        ad alias asperiores at autem beatae commodi delectus dolore dolorem, doloribus facere facilis fuga harum illo
        labore libero minus natus omnis quaerat quidem quis reprehenderit sed similique, soluta tempora unde voluptatem?
        Adipisci aliquid ipsam sint? Ab aliquam, aliquid asperiores, aspernatur consectetur cumque, deserunt dolores eum
        fuga fugiat labore quae quam rem sed temporibus vel voluptatum? Aspernatur, atque eum harum illo iste iusto
        maxime modi molestias, mollitia omnis reprehenderit, saepe veritatis? Distinctio, fugit.
      </div>
      <Button
        label="To Main"
        onClick={() => {
          navigate(ERoutes.Main)
        }}
      />
    </>
  )
}

export default WelcomePage
