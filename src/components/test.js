//was not working for some reason ...
//had to check ....
{() => {
    // if profile is empty display string 
    console.log(profiles.length);
    if (profiles.length === 0){
      console.log('profile is empty');
      return (
        <h1> profile is empty </h1>
      );
    }
    // else display every profile
    else {
      return(
        profiles.map( profile => (
          <Row>
            <Profile name={profile.name} amount={profile.amount}/>
          </Row>
        ))
    )
        }
  }}