package com.revature;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Cat;
import com.revature.service.PasswordTokenService;

public class PTTest {

	public static void main(String[] args) {
		ApplicationContext applicationContext 
			= new ClassPathXmlApplicationContext("applicationContext.xml");
		
		PasswordTokenService pts = applicationContext.getBean("passwordTokenService", PasswordTokenService.class);
		
		Cat atlas = new Cat(
				200,
				"atlas",
				"p4ssw0rd",
				"Atlas",
				"ismael.khalil1995@gmail.com",
				"He flop",
				null
				);
		pts.insertPasswordToken(atlas);
	}
}
