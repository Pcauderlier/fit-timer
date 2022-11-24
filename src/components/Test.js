import '../styles/Test.css'

function Test(){
  return (
      <div className="testbox">
      <form action="/">
        <div class="banner">
          <h1>Gym Membership Form</h1>
        </div>
        <p class="top-info">Want to become a member of our Gym? Then start by filling our form to complete registration. We will contact you shortly to notify you about your membership card.</p>
        <div class="item">
          <p>Name<span className="required">*</span></p>
          <div class="name-item">
            <input type="text" name="name" placeholder="First" required/>
            <input type="text" name="name" placeholder="Last" required/>
          </div>
        </div>
        <div className="question">
          <p>Gender<span className="required">*</span></p>
          <div class="question-answer">
            <label><input type="radio" value="none" name="gender" required/> <span>Male</span></label>
            <label><input type="radio" value="none" name="gender" required/> <span>Female</span></label>
          </div>
        </div>
        <div className="item">
          <p>Your current weight (lbs)<span class="required">*</span></p>
          <input type="text" name="name"/>
        </div>
        <div class="item">
          <p>Desired weight (lbs)<span class="required">*</span></p>
          <input type="text" name="name" required/>
        </div>
        <div class="item">
          <p>Height<span class="required">*</span></p>
          <input type="text" name="name" required/>
        </div>
        <div class="item">
          <p>BMI<span class="required">*</span></p>
          <input type="text" name="name" required/>
        </div>
        <div class="item">
          <p>Home Address<span class="required">*</span></p>
          <input type="text" name="name" placeholder="Street address" required/>
          <div class="city-item">
            <input type="text" name="name" placeholder="City" required/>
            <input type="text" name="name" placeholder="Region" required/>
            <input type="text" name="name" placeholder="Postal / Zip code" required/>
            <select>
              <option value="">Country</option>
              <option value="1">Russia</option>
              <option value="2">Germany</option>
              <option value="3">France</option>
              <option value="4">Armenia</option>
              <option value="5">USA</option>
            </select>
          </div>
        </div>
        <div class="item">
          <p>Email<span class="required">*</span></p>
          <input type="text" name="name" required/>
        </div>
        <div class="item">
          <p>Phone</p>
          <input type="text" name="name"/>
        </div>
        <div class="question">
          <p>Do you require a personal trainer?<span class="required">*</span></p>
          <div class="question-answer">
            <label><input type="radio" value="none" name="personal-trainer" required/> <span>Yes</span></label>
            <label><input type="radio" value="none" name="personal-trainer" required/> <span>No</span></label>
          </div>
        </div>
        <div class="question">
          <p>Have you been in a Gym before?<span class="required">*</span></p>
          <div class="question-answer">
            <label><input type="radio" value="none" name="gym-before" required/> <span>Yes</span></label>
            <label><input type="radio" value="none" name="gym-before" required/> <span>No</span></label>
          </div>
        </div>
        <div class="question">
          <p>Membership Type<span class="required">*</span></p>
          <div class="question-answer">
            <label><input type="radio" value="none" name="membership" required/> <span>Regular</span></label>
            <label><input type="radio" value="none" name="membership" required/> <span>Pro</span></label>
            <label><input type="radio" value="none" name="membership" required/> <span>VIP</span></label>
          </div>
        </div>
        <div class="btn-block">
          <button type="submit" href="/">Apply</button>
        </div>
      </form>
    </div>
      
        
      
  )
}
export default Test