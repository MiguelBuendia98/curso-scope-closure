function moneyBox ()
{
    let saveCoins = 0;

    function countCoins (coins)
    {
        saveCoins += coins;
        console.log(`Tienes ahorrado: $${saveCoins}`);
    }

    return countCoins;
}

const moneyBoxMiguel = moneyBox();
moneyBoxMiguel(23);
moneyBoxMiguel(12);