package com.web.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


import lombok.extern.slf4j.Slf4j;


@Slf4j
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	   @Bean
	    public CorsFilter corsFilter() {
	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        CorsConfiguration config = new CorsConfiguration();
	        config.setAllowCredentials(true);
	        config.addAllowedOrigin("http://localhost:3000");
	        config.addAllowedHeader("*");
	        config.addAllowedMethod("*");
	        source.registerCorsConfiguration("/**", config);
	        return new CorsFilter(source);  
	    }
		@Bean
		public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
			// 폼 기반 로그인 비활성화
			http.formLogin(login ->login.disable());							

			// HTTP 기본 인증 비활성화
			http.httpBasic(basic ->basic.disable());

			// CSRF(Cross-Site Request Forgery) 공격 방어 기능 비활성화
			http.csrf(csrf ->csrf.disable());

			http.sessionManagement(management ->management
					.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
			
			return http.build();
		}
		


}


























