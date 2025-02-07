import homeIcon from './images/home-icon.svg'

function App() {
  return (
    <>
      <header className="header">
        <hr/>
        <div className="header__nav-block">
          <img src={homeIcon} className="header-icon" alt="home" width={16} height={16}/>
          &gt;
          <span>Проекты</span>
        </div>
        <button className="button header-button">Создать проект</button>
      </header>
      <main className="content">
        <table>
          <thead>
              <tr>
                  <th>Столбец 1 </th>
                  <th>Столбец 2 </th>
                  <th>Столбец 3 </th>
                  <th>Столбец 4 </th>
                  <th>Столбец 5 </th>
                  <th>Столбец 6 </th>
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
              <td>Данные 31</td>
              <td>Данные 32</td>
              <td>Данные 33</td>
              <td>Данные 34</td>
              <td>Данные 35</td>
              <td>Данные 36</td>
            </tr>
            <tr>
              <td>Данные 41</td>
              <td>Данные 42</td>
              <td>Данные 43</td>
              <td>Данные 44</td>
              <td>Данные 45</td>
              <td>Данные 46</td>
            </tr>
            <tr>
              <td>Данные 51</td>
              <td>Данные 52</td>
              <td>Данные 53</td>
              <td>Данные 54</td>
              <td>Данные 55</td>
              <td>Данные 56</td>
            </tr>
            <tr>
              <td>Данные 61</td>
              <td>Данные 62</td>
              <td>Данные 63</td>
              <td>Данные 64</td>
              <td>Данные 65</td>
              <td>Данные 66</td>
            </tr>
            <tr>
              <td>Данные 71</td>
              <td>Данные 72</td>
              <td>Данные 73</td>
              <td>Данные 74</td>
              <td>Данные 75</td>
              <td>Данные 76</td>
            </tr>
            <tr>
              <td>Данные 81</td>
              <td>Данные 82</td>
              <td>Данные 83</td>
              <td>Данные 84</td>
              <td>Данные 85</td>
              <td>Данные 86</td>
            </tr>
          </tbody>
        </table>
      </main>
      
    </>
  )
}

export default App
