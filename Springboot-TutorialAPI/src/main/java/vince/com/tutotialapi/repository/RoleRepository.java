package vince.com.tutotialapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vince.com.tutotialapi.model.ERole;
import vince.com.tutotialapi.model.Role;

import java.util.Optional;

@Repository
public interface RoleRepository  extends JpaRepository<Role, Integer> {
    Role findByName(ERole name);
}
