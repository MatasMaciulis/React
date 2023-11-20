## store - globali state talpykla

## slice - dalis store steito atsakinga už konkrečia dalį pvz user state arba posts

## actions - Su action pagalba pasakom kokius pakeitimus norime padaryti savo state, actios turi 2 properties type ir payload

## reducers- reducer priima action ir pagal tai atlieka kazkoki veiksma ant pacio state. Globalus state yra immutable(negalima tiesiogiai keisti). Kai darom pakeitimus redux padaro kopiją, atnaujina kopiją ir uždeda ją kaip originalą.
