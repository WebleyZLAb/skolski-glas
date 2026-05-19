// Main app — full magazine assembled in DesignCanvas

function App() {
  const W = PAGE_W, H = PAGE_H;
  return (
    <DesignCanvas
      title="Школски глас · Број 18"
      subtitle={'ЈУ ОШ „МАЈКА КНЕЖОПОЉКА", Кнежица · Преглед свих страна'}
      bg="#EDE6D8"
    >
      <DCSection id="front" title="Уводне странице" subtitle="Насловна, садржај, уводна ријеч">
        <DCArtboard id="cover" label="01 · Насловна" width={W} height={H}>
          <PageWrap width={W} height={H}><PageCover /></PageWrap>
        </DCArtboard>
        <DCArtboard id="toc" label="03 · Садржај" width={W} height={H}>
          <PageWrap width={W} height={H}><PageTOC /></PageWrap>
        </DCArtboard>
        <DCArtboard id="editorial" label="04 · Уводна ријеч" width={W} height={H}>
          <PageWrap width={W} height={H}><PageEditorial /></PageWrap>
        </DCArtboard>
      </DCSection>

      <DCSection id="pripremni-tesla" title={'Припремни програм · Пројекат „Тесла"'} subtitle="Поглавља 02 и 03">
        <DCArtboard id="pripremni" label="05 · Припремни програм" width={W} height={H}>
          <PageWrap width={W} height={H}><PagePripremni /></PageWrap>
        </DCArtboard>
        <DCArtboard id="projekat-tesla" label={'06 · Пројекат „Тесла"'} width={W} height={H}>
          <PageWrap width={W} height={H}><PageProjekatTesla /></PageWrap>
        </DCArtboard>
      </DCSection>

      <DCSection id="aktivnosti" title="Активности" subtitle="Поглавље 04 · подсекције">
        <DCArtboard id="akt-opener" label="07 · Активности · опенер" width={W} height={H}>
          <PageWrap width={W} height={H}><PageAktivnostiOpener /></PageWrap>
        </DCArtboard>
        <DCArtboard id="saradnja-1" label="08 · Сарадња (1)" width={W} height={H}>
          <PageWrap width={W} height={H}><PageSaradnja1 /></PageWrap>
        </DCArtboard>
        <DCArtboard id="saradnja-2" label="09 · Сарадња (2)" width={W} height={H}>
          <PageWrap width={W} height={H}><PageSaradnja2 /></PageWrap>
        </DCArtboard>
        <DCArtboard id="saradnja-3" label="10 · Сарадња (3) · Тениски терен" width={W} height={H}>
          <PageWrap width={W} height={H}><PageSaradnja3 /></PageWrap>
        </DCArtboard>
        <DCArtboard id="priredbe-1" label="11 · Приредбе (1)" width={W} height={H}>
          <PageWrap width={W} height={H}><PagePriredbe1 /></PageWrap>
        </DCArtboard>
        <DCArtboard id="priredbe-2" label="12 · Приредбе (2)" width={W} height={H}>
          <PageWrap width={W} height={H}><PagePriredbe2 /></PageWrap>
        </DCArtboard>
        <DCArtboard id="uredjenje" label="13 · Уређење простора" width={W} height={H}>
          <PageWrap width={W} height={H}><PageUredjenje /></PageWrap>
        </DCArtboard>
        <DCArtboard id="sport" label="16 · Школска такмичења" width={W} height={H}>
          <PageWrap width={W} height={H}><PageSport /></PageWrap>
        </DCArtboard>
        <DCArtboard id="konkursi" label="17 · Успјеси на конкурсима" width={W} height={H}>
          <PageWrap width={W} height={H}><PageKonkursi /></PageWrap>
        </DCArtboard>
        <DCArtboard id="lit-intro" label="19 · Литерарни · Талент срца" width={W} height={H}>
          <PageWrap width={W} height={H}><PageLiterarnIntro /></PageWrap>
        </DCArtboard>
        <DCArtboard id="pesme-n1" label="20 · Пјесме Николине (1)" width={W} height={H}>
          <PageWrap width={W} height={H}><PagePoemsNikolina1 /></PageWrap>
        </DCArtboard>
        <DCArtboard id="pesme-n2" label="21 · Пјесме Николине (2)" width={W} height={H}>
          <PageWrap width={W} height={H}><PagePoemsNikolina2 /></PageWrap>
        </DCArtboard>
        <DCArtboard id="pesme-oci" label="22 · Очи × 2" width={W} height={H}>
          <PageWrap width={W} height={H}><PagePoemsOci /></PageWrap>
        </DCArtboard>
        <DCArtboard id="likovni" label="23 · Ликовни радови" width={W} height={H}>
          <PageWrap width={W} height={H}><PageLikovniRadovi /></PageWrap>
        </DCArtboard>
        <DCArtboard id="sah" label="24 · Шах у нашој школи" width={W} height={H}>
          <PageWrap width={W} height={H}><PageSah /></PageWrap>
        </DCArtboard>
      </DCSection>

      <DCSection id="back" title="Радници, дани, закључак" subtitle="Поглавља 05–08">
        <DCArtboard id="strucna" label="25 · Стручна усавршавања" width={W} height={H}>
          <PageWrap width={W} height={H}><PageStrucnaUsavrsavanja /></PageWrap>
        </DCArtboard>
        <DCArtboard id="dani" label="26 · Међународни дани" width={W} height={H}>
          <PageWrap width={W} height={H}><PageMedjunarodniDani /></PageWrap>
        </DCArtboard>
        <DCArtboard id="zanimljivosti" label="27 · Весела страница" width={W} height={H}>
          <PageWrap width={W} height={H}><PageZanimljivosti /></PageWrap>
        </DCArtboard>
        <DCArtboard id="zanimljivosti-2" label="28 · Занимљивости" width={W} height={H}>
          <PageWrap width={W} height={H}><PageZanimljivosti2 /></PageWrap>
        </DCArtboard>
        <DCArtboard id="zakljucak" label="29 · Закључак" width={W} height={H}>
          <PageWrap width={W} height={H}><PageZakljucak /></PageWrap>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
