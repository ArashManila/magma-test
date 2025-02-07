import { useState } from 'react'
import homeIcon from './images/home-icon.svg'
import Modal from './Modal';

function App() {
  const [activeCraeteButton,setActiveCreateButton] = useState<boolean>(false);
  return (
    <>
      <header className="header">
        <hr/>
        <div className="header__nav-block">
          <img src={homeIcon} className="header-icon" alt="home" width={16} height={16}/>
          &gt;
          <span>Проекты</span>
        </div>
        <button className="button header-button" onClick={() => setActiveCreateButton(true)}>Создать проект</button>
        
      </header>
      <main className="content">
        <table>
          <thead>
              <tr>
                  <th>Проект</th>
                  <th>Название</th>
                  <th>ГИП</th>
                  <th>Тип ОКС</th>
                  <th>Объект строительства</th>
                  <th>Дата заврешения</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>Данные 11</span></td>
              <td><span>Данные 12</span></td>
              <td><span>Данные 13</span></td>
              <td><span>Данные 14</span></td>
              <td><span>Данные 15</span></td>
              <td><span>Данные 16</span></td>
            </tr>
            <tr>
              <td><span>Данные 21</span></td>
              <td><span>Данные 22</span></td>
              <td><span>Данные 23</span></td>
              <td><span>Данные 24</span></td>
              <td><span>Данные 25</span></td>
              <td><span>Данные 26</span></td>
            </tr>
            <tr>
              <td><span>Данные 31</span></td>
              <td><span>Данные 32</span></td>
              <td><span>Данные 33</span></td>
              <td><span>Данные 34</span></td>
              <td><span>Данные 35</span></td>
              <td><span>Данные 36</span></td>
            </tr>
            <tr>
              <td><span>Данные 41</span></td>
              <td><span>Данные 42</span></td>
              <td><span>Данные 43</span></td>
              <td><span>Данные 44</span></td>
              <td><span>Данные 45</span></td>
              <td><span>Данные 46</span></td>
            </tr>
            <tr>
              <td><span>Данные 51</span></td>
              <td><span>Данные 52</span></td>
              <td><span>Данные 53</span></td>
              <td><span>Данные 54</span></td>
              <td><span>Данные 55</span></td>
              <td><span>Данные 56</span></td>
            </tr>
            <tr>
              <td><span>Данные 61</span></td>
              <td><span>Данные 62</span></td>
              <td><span>Данные 63</span></td>
              <td><span>Данные 64</span></td>
              <td><span>Данные 65</span></td>
              <td><span>Данные 66</span></td>
            </tr>
            <tr>
              <td><span>Данные 71</span></td>
              <td><span>Данные 72</span></td>
              <td><span>Данные 73</span></td>
              <td><span>Данные 74</span></td>
              <td><span>Данные 75</span></td>
              <td><div>Данные 76</div></td>
            </tr>
            <tr>
              <td ><span>Данные 81</span></td>
              <td ><span>Данные 82</span></td>
              <td><span>Данные 83</span></td>
              <td><span>Данные 84</span></td>
              <td><span>Данные 85</span></td>
              <td><span>Данные 86</span></td>
            </tr>
          </tbody>
        </table>
      </main>
      {activeCraeteButton && (<Modal active={activeCraeteButton} setActive={setActiveCreateButton}/>)}
    </>
  )
}

export default App
