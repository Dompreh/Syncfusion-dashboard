import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

function ColorPicker() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:text-white dark:bg-secondary-dark-bg">
    <Header category="App" title="Color Picker" />
      <div className='text-center'>
        <div id='preview' className="dark:bg-secondary-dark-bg bg-opacity-0"  />
          <div className='flex justify-center items-center flex-wrap gap-20'>
            <div>
              <p className='font-semibold text-2xl mt-2 mb-4'>Inline Palette</p>
              <ColorPickerComponent 
                id="inline-pallete"
                mode="Palette"
                modeSwitcher={false}
                showButtons={false}
                inline
                change={change}
                />
            </div>
            <div>
              <p className='font-semibold text-2xl mt-2 mb-4'>Inline Picker</p>
              <ColorPickerComponent 
                id="inline-pallete"
                mode="Picker"
                modeSwitcher={false}
                showButtons={false}
                inline
                change={change}
                />
            </div>
          </div>
      </div>
    </div>
  )
}

export default ColorPicker