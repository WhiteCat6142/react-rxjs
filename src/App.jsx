import React from 'react'
import PropTypes from 'prop-types';
import './App.css'

//https://codepen.io/WhiteCat6142/pen/ZEVQGjv
//https://www.npmjs.com/package/rxjs-hooks
//https://qiita.com/terrierscript/items/51c52af61c9e6b05dd3b
//https://rxjs.dev/guide/operators
//https://qiita.com/ryuseikurata/items/45faa9cd8f50a390b10c
//https://postd.cc/what-is-functional-reactive-programming/
//https://speakerdeck.com/phdesign/everythings-a-stream-an-introduction-to-rxjs-and-avoiding-anti-patterns
//https://qiita.com/seira/items/8a170cc950241a8fdb23
//https://qiita.com/kalbeekatz/items/1faa72a46ffec460e97a
//https://qiita.com/h-yoshikawa44/items/bab6845472e4d428732c

import { useEventCallback, useObservable } from "rxjs-hooks";
import { map, debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { themeChange } from 'theme-change'

const useSearch = () =>
  useEventCallback(
    (word$) =>
      word$.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        map((result) => (result))
      ),
    ""
  )

const Search = ({ word, changeInput }) => (
  <div>
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => changeInput(e.target.value)} />
  </div>
)

Search.propTypes = {
  word: PropTypes.string,
  changeInput: PropTypes.func
};

const App = () => {
  const [setWords,words] = useSearch()
  React.useEffect(() => {
    themeChange(false)
  }, [])
  return (
    <div>
      <Search changeInput={setWords} word={words} />
      <div>{words.toString()}</div>
      <button className="btn" data-set-theme="" data-act-class="ACTIVECLASS">Reset</button>
      <button className="btn" data-set-theme="dark" data-act-class="ACTIVECLASS">Dark</button>
      <button className="btn" data-set-theme="light" data-act-class="ACTIVECLASS">Light</button>
    </div>
  )
}

export default App
