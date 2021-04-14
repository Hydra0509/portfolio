
import './App.css';
import 'tachyons'
import Header from './Header'
import Body from './Body'
import NavBar from './NavBar'
import ImageSlider from './ImageSlider'
import SliderData from './SliderData'
import Lorem from './loremtext'
import Footer from './Footer'
import styled, {ThemeProvider} from "styled-components"
import { lightTheme , darkTheme, GlobalStyles } from './themes.js'
import React, {useState} from 'react'

function App() {
    const StyledApp = styled.div``;
 const [theme,setTheme] = useState("dark")
 const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
 }
  return (
    <>
    <ThemeProvider theme = {theme === 'light' ? lightTheme : darkTheme}>
    <StyledApp>
    <GlobalStyles />
    <NavBar />
    <Header />
    <Body />
    <ImageSlider slides={SliderData} />
    <Lorem />
    <Footer />
    </StyledApp>
    </ThemeProvider>
    </>
  );
}

export default App;
